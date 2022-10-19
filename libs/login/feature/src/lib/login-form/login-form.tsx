import { Box, Flex, Link } from '@chakra-ui/react';
import { useUserStore, useWhenLogin } from '@zot-envelope/data-access';
import { fakeApiLogin } from '@zot-envelope/login/data-access';
import { Button, Input } from '@zot-envelope/ui';
import type { FieldInputProps, FormikHelpers, FormikProps } from 'formik';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

type LoginValues = {
	email: string;
	password: string;
};

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(6, 'Too Short!').required('Required'),
});

export const LoginForm = () => {
	const navigate = useNavigate();
	const setUserValue = useUserStore((state) => state.setValue);

	useWhenLogin(() => {
		// if already login will navigate to dashboard
		// called whenever apikey exist
		navigate('/', { replace: true });
	});

	const handleSubmit = async (
		{ email, password }: LoginValues,
		actions: FormikHelpers<LoginValues>
	) => {
		// same shape as initial values
		try {
			const res = await fakeApiLogin({ email, password });
			const { apikey } = res;
			if (apikey) {
				setUserValue('apikey', apikey);
				setUserValue('email', email);
				// navigate('/', { replace: true });
			} else {
				throw Error('Something went wrong');
			}
		} catch (error: any) {
			actions.setErrors({
				email: error.toString(),
				password: error.toString(),
			});
		}
	};

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={LoginSchema}
			onSubmit={handleSubmit}
		>
			{(props) => (
				<Box
					as={Form}
					shadow="md"
					bg="white"
					rounded="xl"
					w="full"
					px={{ base: '5', md: '10' }}
					py="10"
				>
					<Field name="email">
						{({
							field,
							form,
						}: {
							field: FieldInputProps<string>;
							form: FormikProps<LoginValues>;
						}) => (
							<Input
								label="Email"
								mb="6"
								isInvalid={!!(form.errors.email && form.touched.email)}
								error={form.errors.email}
								inputProps={field}
							/>
						)}
					</Field>
					<Field name="password">
						{({
							field,
							form,
						}: {
							field: FieldInputProps<string>;
							form: FormikProps<LoginValues>;
						}) => (
							<Input
								label="Password"
								type="password"
								mb="3"
								isInvalid={!!(form.errors.password && form.touched.password)}
								error={form.errors.password}
								inputProps={field}
							/>
						)}
					</Field>
					<Box mb="7" fontSize="sm">
						<Link color="primary">Forgot password?</Link>
					</Box>
					<Flex
						flexDir={{ base: 'column-reverse', md: 'row' }}
						justifyContent={{ base: 'center', md: 'space-between' }}
						alignItems="center"
						rowGap="5"
					>
						<Box as="span" fontSize="sm">
							New user? <Link color="primary">Create account</Link>
						</Box>
						<Button
							variant="solid"
							px="5"
							type="submit"
							w={{ base: 'full', md: 'auto' }}
							isLoading={props.isSubmitting}
						>
							Sign in
						</Button>
					</Flex>
				</Box>
			)}
		</Formik>
	);
};

export default LoginForm;
