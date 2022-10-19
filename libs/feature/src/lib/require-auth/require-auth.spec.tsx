import { render } from '@testing-library/react';

import RequireAuth from './require-auth';

describe('RequireAuth', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<RequireAuth>
				<div />
			</RequireAuth>
		);
		expect(baseElement).toBeTruthy();
	});
});
