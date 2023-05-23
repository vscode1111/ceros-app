import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore, store, getAccount } from 'store';
import { convertFromWei } from 'utils';
import { Vault } from 'modules/vaults';

export const getYieldConverterYield = createAction<RequestAction<BigNumber>>(
  'getYieldConverterYield',
  (vault: Vault) => ({
    request: {
      promise: async () => {
        const { data: currentAccount } = getQuery(store.getState(), {
          type: getAccount,
        });
        const sdk = await BinanceSDK.getInstance();
        const yieldConverterContract = await sdk.getYieldConverterContract();
        const yeild = convertFromWei(
          await yieldConverterContract.methods
            .getYieldFor(currentAccount)
            .call(),
        );
        vault.yield = yeild;
        return yeild;
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
