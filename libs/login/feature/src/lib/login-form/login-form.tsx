import { Box, Flex, Link } from '@chakra-ui/react';
import { useUserStore } from '@zot-envelope/data-access';
import { useLoginStore } from '@zot-envelope/login/data-access';
import { Button, Input } from '@zot-envelope/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
	const navigate = useNavigate();
	const store = useLoginStore();
	const setValue = useLoginStore((state) => state.setValue);
	const setUserValue = useUserStore((state) => state.setValue);
	const [error, setError] = useState();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.name, e.target.value);
	};

	const onLogin = (e: any) => {
		e.preventDefault();

		store
			.login()
			.then((res) => {
				if (res.apikey) {
					setUserValue('apikey', res.apikey);
					setUserValue('email', store.email);
					navigate('/');
				}
			})
			.catch((err: any) => {
				setError(err.toString());
			});
	};

	return (
		<Box
			as="form"
			shadow="md"
			bg="white"
			rounded="xl"
			w="full"
			px={{ base: '5', md: '10' }}
			py="10"
			onSubmit={onLogin}
		>
			<Input
				label="Email"
				type="email"
				name="email"
				value={store.email}
				onChange={handleChange}
				mb="6"
				isRequired
				isInvalid={error}
				error={error}
			/>
			<Input
				label="Password"
				type="password"
				name="password"
				value={store.password}
				onChange={handleChange}
				mb="3"
				isRequired
			/>
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
				>
					Sign in
				</Button>
			</Flex>
		</Box>
	);
};

export default LoginForm;
