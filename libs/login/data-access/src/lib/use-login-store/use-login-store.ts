import create from 'zustand';

type LoginState = {
	email: string;
	password: string;
	login(): Promise<{ apikey: string }>;
	setValue(key: string, value: string): void;
};

const FAKE_EMAIL = 'fandi@abyss.com';
const FAKE_PASSWORD = 'rahasiamu';
const FAKE_APIKEY = 'this is an apikey';

export const useLoginStore = create<LoginState>((set, get) => ({
	email: '',
	password: '',
	setValue: (key: string, value: string) => set(() => ({ [key]: value })),
	login: async () => {
		const { email } = get();
		const { password } = get();
		const fakeRequest = new Promise<{ apikey: string }>((resolve, reject) => {
			setTimeout(() => {
				if (email === FAKE_EMAIL && password === FAKE_PASSWORD)
					resolve({ apikey: FAKE_APIKEY });
				else {
					reject(new Error('email or password does not exist'));
				}
			}, 1000);
		});
		return fakeRequest;
	},
}));

export default useLoginStore;
