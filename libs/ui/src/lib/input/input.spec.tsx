import { render, screen, within } from '@testing-library/react';

import Input from './input';

describe('Input', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Input label="input" />);
		expect(baseElement).toBeTruthy();
	});

	it('should have label and input', () => {
		render(<Input label="password" />);

		const label = screen.getByTestId('label');
		expect(label).toBeTruthy();

		const input = screen.getByTestId('input');
		expect(input).toBeTruthy();
	});

	it('should render correct label', () => {
		render(<Input label="password" />);

		const { getByText } = within(screen.getByTestId('label'));
		expect(getByText('password')).toBeTruthy();
	});

	it('should render correct error', () => {
		render(<Input label="password" isInvalid error="password incorrect" />);

		const { getByText } = within(screen.getByTestId('error'));
		expect(getByText('password incorrect')).toBeTruthy();
	});
});
