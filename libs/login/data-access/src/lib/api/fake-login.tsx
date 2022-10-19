const FAKE_EMAIL = 'fandi@abyss.com';
const FAKE_PASSWORD = 'rahasiamu';
const FAKE_APIKEY = 'this is an apikey';

export const fakeApiLogin = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const fakeRequest = new Promise<{ apikey: string }>((resolve, reject) => {
		setTimeout(() => {
			if (email === FAKE_EMAIL && password === FAKE_PASSWORD) {
				resolve({ apikey: FAKE_APIKEY });
			} else {
				reject(new Error('email or password does not exist'));
			}
		}, 1000);
	});
	return fakeRequest;
};

export default fakeApiLogin;
