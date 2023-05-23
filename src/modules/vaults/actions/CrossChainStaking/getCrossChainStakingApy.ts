import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from 'store';
import { Vault } from 'modules/vaults';

export const getCrossChainStakingApy = createAction<
  RequestAction<BigNumber, BigNumber>
>('getCrossChainStakingApy', (vault: Vault) => ({
  request: {
    promise: async () => {
      const apy = new BigNumber(20);
      vault.apy = apy;
      return Promise.resolve(apy);
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
  },
}));
