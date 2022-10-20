/* eslint-disable import/no-extraneous-dependencies */
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

/* eslint-disable @typescript-eslint/dot-notation */
const FAKE_EMAIL = process.env['NX_FAKE_LOGIN_EMAIL'];
const FAKE_PASSWORD = process.env['NX_FAKE_LOGIN_PASSWORD'];

export default defineConfig({
	e2e: nxE2EPreset(__dirname),
	env: {
		fakeEmail: FAKE_EMAIL,
		fakePassword: FAKE_PASSWORD,
	},
});
