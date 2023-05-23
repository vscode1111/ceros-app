import BigNumber from 'bignumber.js';
import axios, { AxiosResponse } from 'axios';
import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { withStore } from 'store';
import { Vault } from 'modules/vaults';

interface MetricsResult {
  services: Service[];
}

interface Service {
  serviceName: string;
  totalStaked: string;
  stakers: string;
  apy: string;
  totalStakedUsd: string;
}

export const getYieldConverterApy = createAction<
  RequestAction<BigNumber, BigNumber>
>('getYieldConverterApy', (vault: Vault) => ({
  request: {
    promise: async () => {
      const response: AxiosResponse<MetricsResult> = await axios.get(
        `https://api.stkr.io/v1alpha/metrics`,
      );

      const bnbRow = response.data.services.find(
        item => item.serviceName === 'bnb',
      );

      if (!bnbRow) {
        return new BigNumber(0);
      }

      const apy = new BigNumber(bnbRow.apy);
      vault.apy = apy;
      return apy;
    },
  },
  meta: {
    asMutation: false,
    showNotificationOnError: true,
    onRequest: withStore,
  },
}));
