import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';

export const storeApplicationReady = createAction<
  RequestAction<boolean, boolean>,
  [boolean, boolean]
>('storeApplicationReady', value => ({
  request: {
    promise: (async () => {
      return Promise.resolve(value);
    })(),
  },
}));
