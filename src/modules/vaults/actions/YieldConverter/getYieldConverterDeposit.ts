import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore, getAccount } from 'store';
import { Store } from 'redux';
import { Vault } from 'modules/vaults';

export const getYieldConverterDeposit = createAction<
  RequestAction<BigNumber, BigNumber>
>('getYieldConverterDeposit', (vault: Vault) => ({
  request: {
    promise: async (store: Store) => {
      const { data: currentAccount } = getQuery(store.getState(), {
        type: getAccount,
      });
      const sdk = await BinanceSDK.getInstance();
      const yieldConverterContract = await sdk.getYieldConverterContract();
      const deposit = new BigNumber(
        await yieldConverterContract.methods
          .getDepositOf(currentAccount)
          .call(),
      ).div(1e18);
      vault.deposit = deposit;
      return deposit;
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
  },
}));
