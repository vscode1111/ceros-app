import { EWalletId } from '@ankr.com/provider';
import {
  RequestAction,
  RequestsStore,
  resetRequests,
} from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { ProviderManagerSingleton } from 'modules/api';

export const disconnect = createAction<RequestAction<void, void>>(
  'auth/disconnect',
  (walletId?: EWalletId) => ({
    request: {
      promise: (() => {
        return ProviderManagerSingleton.getInstance().getETHWriteProvider(
          walletId,
        );
      })(),
    },
    meta: {
      asMutation: false,
      onSuccess: (response, _, { dispatch }: RequestsStore) => {
        localStorage.removeItem('walletId');
        dispatch(resetRequests());
        return response;
      },
    },
  }),
);
