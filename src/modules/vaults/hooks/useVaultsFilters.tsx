/* eslint-disable no-nested-ternary */
import { DispatchRequest } from '@redux-requests/core';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import { MenuItemOption, MenuItemValue, ZERO } from 'modules/common';
import { t } from 'modules/i18n';
import { useCallback, useEffect, useMemo } from 'react';
import { UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { SortOption, storeFilters } from 'store';
import { VaultsBlockValues } from '../Dashboard/VaultsBlock/VaultsBlock';
import { getVaultAssetConfig, VAULT_ASSET } from './constants';
import { Vault } from './useVaults';

export const ANY_OPTION = 'ANY';
export const EMPTY_OPTION = 'EMPTY';

export function getAnyOption(label = 'any'): MenuItemValue {
  return {
    value: ANY_OPTION,
    label,
  };
}

function commonSort<T>(
  a: T,
  b: T,
  getter: (item: T) => number | undefined,
): number {
  const valueA = getter(a);
  const valueB = getter(b);
  return valueA && valueB ? (valueA < valueB ? 1 : -1) : -1;
}

function useSetValue(
  fieldName: string,
  filterValue: string | boolean,
  filterParam: string | boolean,
  setValue: UseFormSetValue<VaultsBlockValues>,
  dispatch: DispatchRequest,
) {
  useEffect(() => {
    if (filterValue === EMPTY_OPTION || filterValue === undefined) {
      setValue(fieldName, filterParam);
    }
  }, [filterValue, filterParam, fieldName, setValue]);

  useEffect(() => {
    void dispatch(storeFilters({ [fieldName]: filterValue }));
  }, [fieldName, filterValue, dispatch]);
}

export function useVaultsFilters(
  vaults: Vault[],
  watch: UseFormWatch<VaultsBlockValues>,
  setValue: UseFormSetValue<VaultsBlockValues>,
): {
  assetOptions: MenuItemValue[];
  filteredVaults: Vault[];
} {
  const networkFilterValue = watch('networkFilter');
  const typeFilterValue = watch('typeFilter');
  const assetFilterValue = watch('assetFilter');
  const depositedFilterValue = watch('depositedFilter');

  const { data: filterParams } = useQuery({
    type: storeFilters,
  });

  const dispatch = useDispatchRequest();

  useSetValue(
    'networkFilter',
    networkFilterValue,
    filterParams?.networkFilter ?? ANY_OPTION,
    setValue,
    dispatch,
  );
  useSetValue(
    'typeFilter',
    typeFilterValue,
    filterParams?.typeFilter ?? ANY_OPTION,
    setValue,
    dispatch,
  );
  useSetValue(
    'assetFilter',
    assetFilterValue,
    filterParams?.assetFilter ?? ANY_OPTION,
    setValue,
    dispatch,
  );
  useSetValue(
    'depositedFilter',
    depositedFilterValue,
    filterParams?.depositedFilter ?? false,
    setValue,
    dispatch,
  );

  const assetOptions: MenuItemValue[] = useMemo(() => {
    const coinSet = new Set<VAULT_ASSET>();
    vaults.forEach(vault => {
      coinSet.add(vault.asset);
    });

    const list: MenuItemValue[] = [];

    coinSet.forEach(key => {
      const coinConfig = getVaultAssetConfig(key);
      list.push({
        value: key,
        label: (
          <MenuItemOption
            sx={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              svg: { width: 24, height: 24 },
            }}
            label={coinConfig?.title && t(coinConfig?.title)}
            logo={coinConfig?.normalIcon}
          />
        ),
      });
    });

    list.sort((a, b) => {
      if (a?.value && b?.value) {
        return String(a.value).localeCompare(String(b.value));
      }
      return 0;
    });

    return [getAnyOption(t('vaults.vault-assets.any'))].concat(list);
  }, [vaults]);

  const vaultFilterCb = useCallback(
    (vault: Vault) => {
      return (
        (networkFilterValue === ANY_OPTION ||
          vault.network === networkFilterValue) &&
        (typeFilterValue === ANY_OPTION || vault.type === typeFilterValue) &&
        (assetFilterValue === ANY_OPTION || vault.asset === assetFilterValue) &&
        (!depositedFilterValue ||
          (depositedFilterValue && vault.deposit?.gt(ZERO) === true))
      );
    },
    [
      networkFilterValue,
      typeFilterValue,
      assetFilterValue,
      depositedFilterValue,
    ],
  );

  const vaultSortCb = useCallback(
    (a: Vault, b: Vault) => {
      switch (filterParams?.sort) {
        case SortOption.DEFAULT:
          return 0;
        case SortOption.APY:
          return commonSort(a, b, item => item.apy?.toNumber());
        case SortOption.TVL:
          return commonSort(a, b, item => item.tvl?.toNumber());
        default:
          return 0;
      }
    },
    [filterParams],
  );

  const filteredVaults = useMemo(
    () => vaults.filter(vaultFilterCb).sort(vaultSortCb),
    [vaults, vaultFilterCb, vaultSortCb],
  );

  return {
    assetOptions,
    filteredVaults,
  };
}
