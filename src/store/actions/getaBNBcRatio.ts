import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { convertFromWei } from 'utils';
import { withStore } from '../withStore';

export const getaBNBcRatio = createAction<RequestAction<BigNumber>>(
  'getaBNBcRatio',
  () => ({
    request: {
      promise: async () => {
        const sdk = await BinanceSDK.getInstance();
        const aBNBcContractProxy = await sdk.getaBNBcProxyContract();
        const ratio = await aBNBcContractProxy.methods.ratio().call();
        return convertFromWei(ratio);
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
