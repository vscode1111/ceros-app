import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';

export const storeLoadingOverlay = createAction<
  RequestAction<boolean, boolean>,
  [boolean, boolean]
>('storeLoadingOverlay', value => ({
  request: {
    promise: (async () => {
      return Promise.resolve(value);
    })(),
  },
}));
