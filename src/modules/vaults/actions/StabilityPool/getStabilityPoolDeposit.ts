import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from 'store';
import { Vault } from 'modules/vaults';

export const getStabilityPoolDeposit = createAction<
  RequestAction<BigNumber, BigNumber>
>('getStabilityPoolDeposit', (vault: Vault) => ({
  request: {
    promise: async () => {
      const deposit = new BigNumber(1);
      vault.deposit = deposit;
      return Promise.resolve(deposit);
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
  },
}));
