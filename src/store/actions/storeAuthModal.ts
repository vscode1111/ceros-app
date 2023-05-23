import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';

export const storeAuthModal = createAction<
  RequestAction<boolean, boolean>,
  [boolean, boolean]
>('storeAuthModal', value => ({
  request: {
    promise: (async () => {
      return Promise.resolve(value);
    })(),
  },
}));
