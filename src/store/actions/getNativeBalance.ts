import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { Store } from 'redux';
import { createAction } from 'redux-smart-actions';
import { ProviderManagerSingleton } from 'modules/api';
import { withStore } from '../withStore';
import { getAccount } from './getAccount';

export const getNativeBalance = createAction<
  RequestAction<BigNumber, BigNumber>
>('getNativeBalance', () => ({
  request: {
    promise: async (store: Store) => {
      const { data: currentAccount } = getQuery(store.getState(), {
        type: getAccount,
      });
      const provider =
        await ProviderManagerSingleton.getInstance().getETHWriteProvider();
      const web3 = provider.getWeb3();
      return new BigNumber(
        web3.utils.fromWei(
          await provider.getWeb3().eth.getBalance(currentAccount),
        ),
      );
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
  },
}));
