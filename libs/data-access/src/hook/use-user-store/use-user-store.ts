import create from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
	email?: string;
	apikey?: string;
	setValue(key: string, value: string): void;
	logout(): Promise<void>;
};

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			email: undefined,
			apikey: undefined,
			setValue: (key: string, value: string) => set(() => ({ [key]: value })),
			logout: async () => set(() => ({ apikey: undefined, email: undefined })),
		}),
		{
			name: 'user-auth',
			getStorage: () => localStorage,
			partialize: (state) => ({ apikey: state.apikey }),
		}
	)
);

export default useUserStore;
