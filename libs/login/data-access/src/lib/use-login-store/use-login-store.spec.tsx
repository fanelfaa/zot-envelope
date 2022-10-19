import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useLoginStore from './use-login-store';

describe('useLoginStore', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLoginStore());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
