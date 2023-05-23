import BigNumber from 'bignumber.js';
import { IWeb3SendResult } from '@ankr.com/provider';
import { getQuery, RequestAction } from '@redux-requests/core';
import { Store } from 'redux';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK, ProviderManagerSingleton } from 'modules/api';
import { withStore, getaBNBcBalance, getAccount } from 'store';
import { getYieldConverterCeTokenBalance } from './getYieldConverterCeTokenBalance';

export const yieldConverterDeposit = createAction<
  RequestAction<IWeb3SendResult, IWeb3SendResult>
>('yieldConverterDeposit', (value: BigNumber) => ({
  request: {
    promise: async (store: Store): Promise<IWeb3SendResult> => {
      const { data: currentAccount } = getQuery(store.getState(), {
        type: getAccount,
      });
      const provider =
        await ProviderManagerSingleton.getInstance().getETHWriteProvider();
      const instance = await BinanceSDK.getInstance();
      const contract = await instance.getYieldConverterContract();

      const data = contract.methods
        .deposit(value.multipliedBy(1e18).toString())
        .encodeABI();

      return provider.sendTransactionAsync(
        currentAccount,
        contract.options.address,
        {
          data,
        },
      );
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
    onSuccess: (response, _, store) => {
      response.data?.receiptPromise.once('receipt', () => {
        void store.dispatchRequest(getaBNBcBalance());
        void store.dispatchRequest(getYieldConverterCeTokenBalance());
      });
      return response;
    },
  },
}));
