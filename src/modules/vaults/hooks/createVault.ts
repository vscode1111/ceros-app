import { useMemo } from 'react';
import { Vault } from './useVaults';
import { useDispatchRequest } from '@redux-requests/react';
import { useApplicationReady } from 'modules/api';

export function useCreateVault(vault: Vault): Vault {
  const dispatch = useDispatchRequest();

  useApplicationReady(() => {
    void dispatch(vault.apyAction(vault));
    void dispatch(vault.tvlAction(vault));
    void dispatch(vault.depositAction(vault));
    void dispatch(vault.yieldAction(vault));
  });

  return useMemo(() => {
    return vault;
  }, [vault]);
}
