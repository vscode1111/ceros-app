import { useDispatchRequest } from '@redux-requests/react';
import { useEffect } from 'react';
import { storeLoadingOverlay } from 'store';

export function useLoadingOverlay(loading: boolean): void {
  const dispatch = useDispatchRequest();

  useEffect(() => {
    void dispatch(storeLoadingOverlay(loading));
  }, [dispatch, loading]);
}
