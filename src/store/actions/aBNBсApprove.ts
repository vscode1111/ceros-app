import BigNumber from 'bignumber.js';
import { getQuery, RequestAction } from '@redux-requests/core';
import { Store } from 'redux';
import { createAction } from 'redux-smart-actions';
import { BinanceSDK } from 'modules/api';
import { withStore } from 'store';
import { TransactionReceipt } from 'web3-core';
import { getYieldConverterApprovedAmount } from 'modules/vaults';
import { MAX_INT } from 'modules/common';
import { getAccount } from './getAccount';

export const aBNBсApprove = createAction<
  RequestAction<TransactionReceipt, TransactionReceipt>,
  [BigNumber]
>('aBNBсApprove', () => ({
  request: {
    promise: async (store: Store): Promise<TransactionReceipt> => {
      const { data: currentAccount } = getQuery(store.getState(), {
        type: getAccount,
      });
      const instance = await BinanceSDK.getInstance();
      const aBNBCcontract = await instance.getaBNBcContract();
      const yieldConverterContract = await instance.getYieldConverterContract();

      return aBNBCcontract.methods
        .approve(yieldConverterContract.options.address, MAX_INT)
        .send({
          from: currentAccount,
        });
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
    onSuccess: async (response, _, store) => {
      await store.dispatchRequest(getYieldConverterApprovedAmount());
      return response;
    },
  },
}));
