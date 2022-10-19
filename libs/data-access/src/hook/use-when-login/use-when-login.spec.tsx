import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useWhenLogin from './use-when-login';

describe('useWhenLogin', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useWhenLogin());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
