import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';

export enum CurrencyOption {
  USD = 'USD',
  Token = 'Token',
}

export const storeCurrency = createAction<
  RequestAction<CurrencyOption, CurrencyOption>,
  [CurrencyOption, CurrencyOption]
>('storeCurrency', value => ({
  request: {
    promise: (async () => {
      return Promise.resolve(value);
    })(),
  },
}));
