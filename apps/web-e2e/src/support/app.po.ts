export const getGreeting = () => cy.get('h1');

export const getBtnSignIn = () => cy.get('[type="submit"]');
export const getInputEmail = () => cy.get('[data-testid="email-input"]');
export const getInputErrorEmail = () => cy.get('[data-testid="email-error"]');
export const getInputPassword = () => cy.get('[data-testid="password-input"]');
export const getInputErrorPassword = () =>
	cy.get('[data-testid="password-error"]');
export const getHomePage = () => cy.get('[data-testid="home-page"]');
export const getLoginPage = () => cy.get('[data-testid="login-page"]');
