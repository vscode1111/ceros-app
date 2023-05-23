import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from 'store';
import { Vault } from 'modules/vaults';

export const getStabilityPoolYield = createAction<RequestAction<BigNumber>>(
  'getStabilityPoolYield',
  (vault: Vault) => ({
    request: {
      promise: () => {
        const yeild = new BigNumber(0);
        vault.yield = yeild;
        return Promise.resolve(yeild);
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
