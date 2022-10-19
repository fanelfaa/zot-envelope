import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Button />);
		expect(baseElement).toBeTruthy();
	});

	it('should render right child', () => {
		render(<Button>Sign Up</Button>);
		const btn = screen.getByRole('button', { name: /sign up/i });
		expect(btn).toBeTruthy();
	});
});
