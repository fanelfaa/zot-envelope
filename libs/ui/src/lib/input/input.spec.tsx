import { render, screen, within } from '@testing-library/react';

import Input from './input';

describe('Input', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Input label="input" />);
		expect(baseElement).toBeTruthy();
	});

	const labelName = 'password';
	it('should have label, input and no error', async () => {
		render(<Input label={labelName} />);

		const label = screen.getByTestId(`${labelName}-label`);
		expect(label).toBeTruthy();

		const input = screen.getByTestId(`${labelName}-input`);
		expect(input).toBeTruthy();

		const error = screen.queryByTestId(`${labelName}-error`);
		expect(error).toBeNull();
	});

	it('should render correct label', () => {
		render(<Input label={labelName} />);

		const { getByText } = within(screen.getByTestId(`${labelName}-label`));
		expect(getByText('password')).toBeTruthy();
	});

	it('should render correct error', () => {
		render(<Input label={labelName} isInvalid error="password incorrect" />);

		const { getByText } = within(screen.getByTestId(`${labelName}-error`));
		expect(getByText('password incorrect')).toBeTruthy();
	});
});
