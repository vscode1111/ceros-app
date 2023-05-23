import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';

export enum SortOption {
  DEFAULT = 'DEFAULT',
  TVL = 'TVL',
  APY = 'APY',
}

interface FilterParams {
  networkFilter: string;
  typeFilter: string;
  assetFilter: string;
  depositedFilter: boolean;
  sort: SortOption;
}

let filterParams: FilterParams;

export const storeFilters = createAction<
  RequestAction<FilterParams, FilterParams>,
  [FilterParams, FilterParams]
>('storeFilters', value => ({
  request: {
    promise: (async () => {
      filterParams = { ...filterParams, ...value };
      return Promise.resolve(filterParams);
    })(),
  },
}));
