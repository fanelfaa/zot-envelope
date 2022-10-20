import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginFeature from './login-feature';

describe('LoginFeature', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LoginFeature />, {
			wrapper: BrowserRouter,
		});
		expect(baseElement).toBeTruthy();
	});
});
