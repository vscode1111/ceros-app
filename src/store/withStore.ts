import { RequestAction, RequestsStore } from '@redux-requests/core';
import { AnyAction } from 'redux';

export function withStore(
  request: AnyAction,
  action: RequestAction,
  store: RequestsStore,
): { promise: Promise<unknown> } {
  return {
    promise: (() => {
      return request.promise(store);
    })(),
  };
}
