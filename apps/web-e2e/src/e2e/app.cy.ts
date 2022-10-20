import {
	getBtnSignIn,
	getHomePage,
	getInputEmail,
	getInputErrorEmail,
	getInputErrorPassword,
	getInputPassword,
	getLoginPage,
} from '../support/app.po';

describe('web', () => {
	beforeEach(() => cy.visit('/'));

	it('should render error required', () => {
		getBtnSignIn().click();
		getInputErrorEmail().contains(/required/i);
		getInputErrorPassword().contains(/required/i);
	});

	it('should render error email: invalid email', () => {
		getInputEmail().type('invalid@email');
		getBtnSignIn().click();
		getInputErrorEmail().contains(/invalid email/i);
	});

	it('should render error password too short', () => {
		getInputPassword().type('pass');
		getBtnSignIn().click();
		getInputErrorPassword().contains(/too short/i);
	});

	it('should render email or password incorrect', () => {
		getInputEmail().type('incorrect@email.com');
		getInputPassword().type('incorrect_password');
		getBtnSignIn().click();
		getInputErrorEmail().contains(/email or password incorrect/i);
		getInputErrorPassword().contains(/email or password incorrect/i);
	});

	it('should redirect to home email and password correct and then redirect login after click logout', () => {
		getInputEmail().type(Cypress.env('fakeEmail'));
		getInputPassword().type(Cypress.env('fakePassword'));
		getBtnSignIn().click();
		getHomePage().should('be.visible');

		// redirect to login when logout
		cy.get('[data-testid="button-logout"]').click();
		getLoginPage().should('be.visible');
	});
});
