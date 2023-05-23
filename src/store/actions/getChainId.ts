import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { ProviderManagerSingleton } from 'modules/api';

export const getChainId = createAction<RequestAction<number, number>>(
  'getChainId',
  () => ({
    request: {
      promise: (async () => {
        const keyProvider =
          await ProviderManagerSingleton.getInstance().getETHWriteProvider();

        return keyProvider.getWeb3().eth.net.getId();
      })(),
    },
    meta: {
      asMutation: false,
    },
  }),
);
