import { Box, Center, Grid, Heading, Text } from '@chakra-ui/react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@zot-envelope/ui';

import LoginForm from './login-form/login-form';

export function LoginFeature() {
	return (
		<Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} color="white">
			<Box
				bg="primaryDark"
				px={{ base: '5', md: '10' }}
				py="5"
				h="100vh"
				pos="relative"
			>
				<Heading size="md" pos="absolute">
					Envelope
				</Heading>
				<Center h="full">
					<Box textAlign="center" maxW="420">
						<Heading size="2xl" mb="5" fontWeight="extrabold">
							Introducing our 2020 report
						</Heading>
						<Text mb="5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididun.
						</Text>
						<Button variant="outline" px="20">
							View Report{' '}
							<Box as={FontAwesomeIcon} icon={faExternalLinkAlt} ml="2" />
						</Button>
					</Box>
				</Center>
			</Box>
			<Box bg="#f6f9fb" h="100vh" px={{ base: '5', md: '10' }}>
				<Center h="full">
					<Box maxW="450" w="full" color="grey" fontWeight="bold">
						<Heading
							size="2xl"
							color="primaryDark"
							mb="3"
							fontWeight="extrabold"
						>
							Welcome back
						</Heading>
						<Heading size="lg" mb="9">
							Sign in to continue
						</Heading>
						<LoginForm />
					</Box>
				</Center>
			</Box>
		</Grid>
	);
}

export default LoginFeature;
