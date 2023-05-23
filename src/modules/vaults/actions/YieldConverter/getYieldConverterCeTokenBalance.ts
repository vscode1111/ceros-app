import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore, store, getAccount } from 'store';
import { convertFromWei } from 'utils';

export const getYieldConverterCeTokenBalance = createAction<
  RequestAction<BigNumber>
>('getYieldConverterCeTokenBalance', () => ({
  request: {
    promise: async () => {
      const { data: currentAccount } = getQuery(store.getState(), {
        type: getAccount,
      });
      const sdk = await BinanceSDK.getInstance();
      const yieldConverterContract = await sdk.getYieldConverterContract();
      const balance = await yieldConverterContract.methods
        .getCeTokenBalanceOf(currentAccount)
        .call();
      return convertFromWei(balance);
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
  },
}));
