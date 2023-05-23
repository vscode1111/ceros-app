import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { ProviderManagerSingleton } from 'modules/api';

export const getAccount = createAction<RequestAction<string, string>>(
  'getAccount',
  () => ({
    request: {
      promise: (async () => {
        const keyProvider =
          await ProviderManagerSingleton.getInstance().getETHWriteProvider();

        return keyProvider.currentAccount;
      })(),
    },
    meta: {
      asMutation: false,
    },
  }),
);
