import { render } from '@testing-library/react';
import { useUserStore } from '@zot-envelope/data-access';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

const renderElement = () => render(<App />, { wrapper: BrowserRouter });
describe('App', () => {
	beforeEach(() => {
		useUserStore.setState({ apikey: undefined });
	});
	it('should render successfully', () => {
		const { baseElement } = renderElement();

		expect(baseElement).toBeTruthy();
	});

	it('should have a greeting as the title', () => {
		const { getByText } = renderElement();

		expect(getByText(/Envelope/i)).toBeTruthy();
	});

	it('should redirect to login when apikey does not exist', async () => {
		const { findByTestId } = renderElement();
		const loginPage = await findByTestId('login-page');
		expect(loginPage).toBeTruthy();
	});

	it('should redirect to homepage when apikey exist', async () => {
		useUserStore.setState({ apikey: 'test apikey' });
		const { findByTestId } = renderElement();
		const homePage = await findByTestId('home-page');
		expect(homePage).toBeTruthy();
	});
});
