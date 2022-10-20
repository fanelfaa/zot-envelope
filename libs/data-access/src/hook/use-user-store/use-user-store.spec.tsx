import { act, renderHook } from '@testing-library/react';

import useUserStore from './use-user-store';

describe('useUserStore', () => {
	it('should render successfully', () => {
		const TEST_APIKEY = 'test apikey';
		const { result } = renderHook(() => useUserStore());

		expect(result.current.apikey).toBe(undefined);

		act(() => {
			result.current.setValue('apikey', TEST_APIKEY);
		});

		expect(result.current.apikey).toBe(TEST_APIKEY);
	});
});
