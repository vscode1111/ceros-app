import { createDriver as createAxiosDriver } from '@redux-requests/axios';
import { handleRequests } from '@redux-requests/core';
import { createDriver as createMockDriver } from '@redux-requests/mock';
import { createDriver as createPromiseDriver } from '@redux-requests/promise';
import axios from 'axios';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: {
    default: createPromiseDriver({
      processResponse: response => ({ data: response }),
    }),
    axios: createAxiosDriver(axios),
    mock: createMockDriver({ timeout: 2000 }),
  },
});

const reducers = combineReducers({
  requests: requestsReducer,
});

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...requestsMiddleware)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
