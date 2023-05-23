import { ITokenInfo } from '@ankr.com/provider';
import { RequestAction } from '@redux-requests/core';
import { ProviderManagerSingleton } from 'modules/api';
import { createAction } from 'redux-smart-actions';

export const addTokenToWallet = createAction<
  RequestAction<boolean, boolean>,
  [ITokenInfo]
>('addTokenToWallet', token => ({
  request: {
    promise: (async () => {
      const provider =
        await ProviderManagerSingleton.getInstance().getETHWriteProvider();

      return provider.addTokenToWallet(token);
    })(),
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
  },
}));
