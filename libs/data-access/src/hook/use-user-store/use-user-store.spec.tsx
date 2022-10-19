import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useUserStore from './use-user-store';

describe('useUserStore', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useUserStore());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
