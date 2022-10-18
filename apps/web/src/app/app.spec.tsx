import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
	const renderElement = () => render(<App />, { wrapper: BrowserRouter });
	it('should render successfully', () => {
		const { baseElement } = renderElement();

		expect(baseElement).toBeTruthy();
	});

	it('should have a greeting as the title', () => {
		const { getByText } = renderElement();

		expect(getByText(/Envelope/gi)).toBeTruthy();
	});
});
