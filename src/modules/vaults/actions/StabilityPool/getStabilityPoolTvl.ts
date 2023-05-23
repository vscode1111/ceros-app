import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from 'store';
import { Vault } from 'modules/vaults';

export const getStabilityPoolTvl = createAction<RequestAction<BigNumber>>(
  'getStabilityPoolTvl',
  (vault: Vault) => ({
    request: {
      promise: () => {
        const tvl = new BigNumber(1000);
        vault.tvl = tvl;
        return Promise.resolve(tvl);
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
