import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { Store } from 'redux';
import { createAction } from 'redux-smart-actions';
import { convertFromWei } from 'utils';
import { BinanceSDK } from 'modules/api';
import { withStore, getAccount } from 'store';

export const getYieldConverterApprovedAmount = createAction<
  RequestAction<BigNumber, BigNumber>
>('getYieldConverterApprovedAmount', () => ({
  request: {
    promise: async (store: Store) => {
      const { data: currentAccount } = getQuery(store.getState(), {
        type: getAccount,
      });
      const sdk = await BinanceSDK.getInstance();
      const aBNBcContract = await sdk.getaBNBcContract();
      const yieldConverterContract = await sdk.getYieldConverterContract();
      const amount = await aBNBcContract.methods
        .allowance(currentAccount, yieldConverterContract.options.address)
        .call();
      return convertFromWei(amount);
    },
  },
  meta: {
    asMutation: false,
    onRequest: withStore,
  },
}));
