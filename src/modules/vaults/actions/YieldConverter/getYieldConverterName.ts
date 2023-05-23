import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore } from 'store';

export const getYieldConverterName = createAction<RequestAction<string>>(
  'getYieldConverterName',
  () => ({
    request: {
      promise: async () => {
        const sdk = await BinanceSDK.getInstance();
        const yieldConverterContract = await sdk.getYieldConverterContract();
        return yieldConverterContract.methods.getName().call();
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
