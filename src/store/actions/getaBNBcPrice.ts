import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from '../withStore';
import { getBNBPrice } from './getBNBPrice';
import { Store } from 'redux';
import { BinanceSDK } from 'modules/api';

export const getaBNBcPrice = createAction<RequestAction<BigNumber>>(
  'getaBNBcPrice',
  () => ({
    request: {
      promise: async (store: Store) => {
        const { data: bnbPrice } = getQuery(store.getState(), {
          type: getBNBPrice,
        });

        const sdk = await BinanceSDK.getInstance();

        const pancakePairaBNBcContract =
          await sdk.getPancakePairaBNBcContract();

        const { _reserve0: _aBNBcReserve0, _reserve1: _aBNBcReserve1 } =
          await pancakePairaBNBcContract.methods.getReserves().call();

        const aBNBcReserve0 = new BigNumber(_aBNBcReserve0);
        const aBNBcReserve1 = new BigNumber(_aBNBcReserve1);

        const aBNBcPrice = aBNBcReserve0
          .div(aBNBcReserve1)
          .multipliedBy(bnbPrice);

        return aBNBcPrice;
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
