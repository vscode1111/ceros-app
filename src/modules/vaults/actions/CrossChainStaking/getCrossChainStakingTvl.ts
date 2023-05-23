import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from 'store';
import { Vault } from 'modules/vaults';

export const getCrossChainStakingTvl = createAction<RequestAction<BigNumber>>(
  'getCrossChainStakingTvl',
  (vault: Vault) => ({
    request: {
      promise: () => {
        const tvl = new BigNumber(1);
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
