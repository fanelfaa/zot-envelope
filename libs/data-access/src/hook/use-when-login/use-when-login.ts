import { useEffect } from 'react';

import useUserStore from '../use-user-store/use-user-store';

export function useWhenLogin(cb?: () => void) {
	const savedApikey = useUserStore((state) => state.apikey);

	useEffect(() => {
		if (savedApikey && cb) {
			cb();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cb, savedApikey]);
}

export default useWhenLogin;
