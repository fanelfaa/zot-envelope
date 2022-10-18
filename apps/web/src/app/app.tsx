// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChakraProvider } from '@chakra-ui/react';
import { RequireAuth } from '@zot-envelope/feature';
import { LoginFeature } from '@zot-envelope/login/feature';
import { theme } from '@zot-envelope/ui';
import { Route, Routes } from 'react-router-dom';

import { HomeFeature } from './home';

export function App() {
	return (
		<ChakraProvider theme={theme}>
			<Routes>
				<Route
					path="/"
					element={
						<RequireAuth>
							<HomeFeature />
						</RequireAuth>
					}
				/>
				<Route path="login" element={<LoginFeature />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
