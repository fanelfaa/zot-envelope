import { renderHook } from '@testing-library/react';

import useUserStore from '../use-user-store/use-user-store';
import useWhenLogin from './use-when-login';

const mockCallbackFunction = jest.fn();

describe('useWhenLogin', () => {
	beforeEach(() => {
		mockCallbackFunction.mockReset();
	});

	it('should call callback when apikey exist', () => {
		useUserStore.setState({ apikey: 'test apikey' });
		renderHook(() => useWhenLogin(mockCallbackFunction));
		expect(mockCallbackFunction).toBeCalled();
	});

	it('should not call callback when apikey does not exist', () => {
		useUserStore.setState({ apikey: undefined });
		renderHook(() => useWhenLogin(mockCallbackFunction));
		expect(mockCallbackFunction).not.toBeCalled();
	});
});
