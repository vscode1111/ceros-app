import BigNumber from 'bignumber.js';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore } from '../withStore';

export const getBNBPrice = createAction<RequestAction<BigNumber>>(
  'getBNBPrice',
  () => ({
    request: {
      promise: async () => {
        const sdk = await BinanceSDK.getInstance();

        const pancakePairBNBContract = await sdk.getPancakePairBNBContract();

        const { _reserve0: _bnbReserve0, _reserve1: _bnbReserve1 } =
          await pancakePairBNBContract.methods.getReserves().call();

        const bnbReserve0 = new BigNumber(_bnbReserve0);
        const bnbReserve1 = new BigNumber(_bnbReserve1);

        return bnbReserve1.div(bnbReserve0);
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
