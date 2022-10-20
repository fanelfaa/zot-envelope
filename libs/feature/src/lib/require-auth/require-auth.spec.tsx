import { screen } from '@testing-library/react';
import { useUserStore } from '@zot-envelope/data-access';
import { renderWithRouter } from '@zot-envelope/util/testing';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from './require-auth';

const renderWrapper = (el: JSX.Element) =>
	renderWithRouter(<RequireAuth>{el}</RequireAuth>);

describe('RequireAuth', () => {
	beforeEach(() => {
		useUserStore.setState({ apikey: undefined });
	});
	it('should render successfully', () => {
		useUserStore.setState({ apikey: 'test apikey' });
		const { queryByTestId } = renderWrapper(
			<div data-testid="dashboard-page" />
		);
		expect(queryByTestId('dashboard-page')).toBeTruthy();
	});

	const mockRoutes = () =>
		renderWithRouter(
			<Routes>
				<Route
					path="/"
					element={
						<RequireAuth>
							<div data-testid="home-page" />
						</RequireAuth>
					}
				/>
				<Route path="login" element={<div data-testid="login-page" />} />
			</Routes>
		);

	it("should redirect to /login if apikey doesn't exist", async () => {
		mockRoutes();
		const loginPage = await screen.findByTestId('login-page');
		expect(loginPage).not.toBeNull();
	});

	it('should redirect to / if apikey exist', async () => {
		useUserStore.setState({ apikey: 'test apikey' });
		mockRoutes();
		const homePage = await screen.findByTestId('home-page');
		expect(homePage).not.toBeNull();
	});
});
