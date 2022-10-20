import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '@zot-envelope/util/testing';

import LoginForm from './login-form';

const setup = () => {
	const utils = renderWithRouter(<LoginForm />);

	return {
		inputEmail: utils.getByTestId('email-input'),
		inputPassword: utils.getByTestId('password-input'),
		btnSignIn: utils.getByRole('button', { name: /sign in/i }),
		...utils,
	};
};

describe('LoginForm', () => {
	it('should render successfully', async () => {
		const { baseElement } = setup();
		expect(baseElement).toBeTruthy();
	});
	it('should render all components', () => {
		const { inputEmail, inputPassword, btnSignIn } = setup();

		expect(inputEmail).toBeTruthy();

		expect(inputPassword).toBeTruthy();

		expect(btnSignIn).toBeTruthy();
	});

	it('should not render errors on first load', () => {
		const { queryByTestId } = setup();

		const errorEmail = queryByTestId('email-error');
		expect(errorEmail).toBeNull();

		const errorPassword = queryByTestId('password-error');
		expect(errorPassword).toBeNull();
	});

	const findErrorEmail = () => screen.findByTestId('email-error');
	const findErrorPassword = () => screen.findByTestId('password-error');

	it('should render errors on button sign in click if inputs empty', async () => {
		const { user, btnSignIn } = setup();

		await user.click(btnSignIn);

		expect(await findErrorEmail()).toBeTruthy();

		expect(await findErrorPassword()).toBeTruthy();
	});

	it('input email should render correct error message', async () => {
		const { user, btnSignIn, inputEmail } = setup();
		await user.click(btnSignIn);

		const getErrorMessage = async () => (await findErrorEmail()).innerHTML;

		// if empty will get 'Required'
		expect(await getErrorMessage()).toBe('Required');

		// if valid email then get 'Invalid email'
		fireEvent.change(inputEmail, { target: { value: 'unvalid@email' } });
		await user.click(btnSignIn);
		expect(await getErrorMessage()).toBe('Invalid email');
	});

	it('input password should render correct error message', async () => {
		const { user, btnSignIn, inputPassword } = setup();
		await user.click(btnSignIn);

		const getErrorMessage = async () => (await findErrorPassword()).innerHTML;

		// if empty will get 'Required'
		expect(await getErrorMessage()).toBe('Required');

		// if too short ( < 6 ) then get 'Invalid email'
		fireEvent.change(inputPassword, { target: { value: 'paswo' } });
		await user.click(btnSignIn);
		expect(await getErrorMessage()).toBe('Too Short!');
	});
});
