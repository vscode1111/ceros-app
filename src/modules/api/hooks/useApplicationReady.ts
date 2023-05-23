import { useQuery } from '@redux-requests/react';
import { useEffect } from 'react';
import { storeApplicationReady } from 'store';

export function useApplicationReady(effect: () => void | Promise<void>): void {
  const { loading: applicationLoading, data: applicationReady } = useQuery({
    type: storeApplicationReady,
  });

  return useEffect(() => {
    if (!applicationLoading && applicationReady) {
      void effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicationLoading, applicationReady]);
}
