import { EEthereumNetworkId } from '@ankr.com/provider';
import { getQuery, RequestAction, RequestsStore } from '@redux-requests/core';
import { AnyAction } from 'redux';
import { createAction } from 'redux-smart-actions';
import { ProviderManagerSingleton } from 'modules/api';
import { t } from 'modules/i18n';
import { getChainId, getApplicationData } from 'store';
import { CHAIN_ID } from 'modules/common';

export const switchNetwork = createAction<RequestAction<void, void>>(
  'auth/switchNetwork',
  () => ({
    request: {
      promise: async (
        currentChainId: EEthereumNetworkId,
        requiredChainId: EEthereumNetworkId,
      ) => {
        if (currentChainId === requiredChainId) {
          throw new Error(t('wrong-network.error.is-active'));
        }

        const keyProvider =
          await ProviderManagerSingleton.getInstance().getETHWriteProvider();

        if (typeof requiredChainId !== 'number') {
          throw new Error(`Unsupported chain id`);
        }

        await keyProvider.switchNetwork(requiredChainId);
      },
    },
    meta: {
      asMutation: true,
      showNotificationOnError: true,
      onRequest(
        request: AnyAction,
        action: RequestAction,
        store: RequestsStore,
      ): { promise: Promise<unknown> } {
        const { data: chainId } = getQuery(store.getState(), {
          type: getChainId,
        });

        return {
          promise: (() => {
            return request.promise(chainId, CHAIN_ID);
          })(),
        };
      },
      onSuccess: async (response, _, store) => {
        await getApplicationData(store.dispatchRequest);

        return response;
      },
    },
  }),
);
