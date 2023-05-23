import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { Store } from 'redux';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { convertFromWei } from 'utils';
import { withStore } from '../withStore';
import { getAccount } from './getAccount';

export const getaBNBcBalance = createAction<RequestAction<BigNumber>>(
  'getaBNBcBalance',
  () => ({
    request: {
      promise: async (store: Store) => {
        const { data: currentAccount } = getQuery(store.getState(), {
          type: getAccount,
        });
        const sdk = await BinanceSDK.getInstance();
        const aBNBcContract = await sdk.getaBNBcContract();
        const balance = await aBNBcContract.methods
          .balanceOf(currentAccount)
          .call();
        return convertFromWei(balance);
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
