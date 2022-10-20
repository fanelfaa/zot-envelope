import { Center, Heading } from '@chakra-ui/react';
import { useUserStore } from '@zot-envelope/data-access';
import { Button } from '@zot-envelope/ui';
import { useNavigate } from 'react-router-dom';

export const HomeFeature = () => {
	const navigate = useNavigate();
	const logout = useUserStore((state) => state.logout);

	return (
		<Center flexDir="column" data-testid="home-page">
			<Heading>Home Page</Heading>
			<Button
				variant="solid"
				onClick={() => {
					logout().then(() => {
						navigate('/login', { replace: true });
					});
				}}
				data-testid="button-logout"
			>
				Logout
			</Button>
		</Center>
	);
};

export default HomeFeature;
