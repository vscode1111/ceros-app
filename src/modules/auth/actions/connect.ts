import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { ProviderManagerSingleton } from 'modules/api';
import { EWalletId } from '@ankr.com/provider';
import {
  getApplicationData,
  storeApplicationReady,
  storeAuthModal,
  storeLoadingOverlay,
} from 'store';

export const connect = createAction<RequestAction<void, void>>(
  'auth/connect',
  (walletId: EWalletId) => ({
    request: {
      promise: (async () => {
        const provider =
          await ProviderManagerSingleton.getInstance().getETHWriteProvider(
            walletId,
          );

        return {
          address: provider.currentAccount,
          chainId: provider.currentChain,
          walletId,
        };
      })(),
    },
    meta: {
      asMutation: false,
      showNotificationOnError: true,
      onRequest: (response, _, store) => {
        void store.dispatchRequest(storeApplicationReady(false));
        void store.dispatchRequest(storeLoadingOverlay(true));
        return response;
      },
      onSuccess: async (response, _, store) => {
        void store.dispatchRequest(storeAuthModal(false));
        localStorage.setItem('walletId', walletId);
        await getApplicationData(store.dispatchRequest);
        void store.dispatchRequest(storeApplicationReady(true));
        void store.dispatchRequest(storeLoadingOverlay(false));
        return response;
      },
      onError: (error, action, store) => {
        void store.dispatchRequest(storeApplicationReady(true));
        void store.dispatchRequest(storeLoadingOverlay(false));
      },
    },
  }),
);
