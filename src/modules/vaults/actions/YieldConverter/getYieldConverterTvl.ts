import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore, getaBNBcPrice } from 'store';
import { Store } from 'redux';
import { Vault } from 'modules/vaults';

export const getYieldConverterTvl = createAction<RequestAction<BigNumber>>(
  'getYieldConverterTvl',
  (vault: Vault) => ({
    request: {
      promise: async (store: Store) => {
        const { data: aBNBcPrice } = getQuery(store.getState(), {
          type: getaBNBcPrice,
        });

        const sdk = await BinanceSDK.getInstance();

        const yieldConverterContract = await sdk.getYieldConverterContract();

        const totalAmountInVault = new BigNumber(
          await yieldConverterContract.methods.getTotalAmountInVault().call(),
        );

        const tvl = totalAmountInVault.multipliedBy(aBNBcPrice).div(1e18);
        vault.tvl = tvl;
        return tvl;
      },
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: withStore,
    },
  }),
);
