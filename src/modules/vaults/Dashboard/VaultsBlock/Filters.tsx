/* eslint-disable react-hooks/exhaustive-deps */
import {
  FilterField,
  MenuItemValue,
  CheckboxField,
  useIsMDDown,
} from 'modules/common';
import { t } from 'modules/i18n';
import { VAULT_NETWORK, VAULT_TYPE } from '../../hooks/constants';
import { useMemo } from 'react';
import { Control, UseFormWatch } from 'react-hook-form';
import { useFilters } from './useFilterStyles';
import { VaultsBlockValues } from './VaultsBlock';
import { ANY_OPTION, getAnyOption } from '../../hooks/useVaultsFilters';
import { SortFilterTab } from './SortFilterTab';

export interface FiltersProps {
  control: Control<VaultsBlockValues>;
  assetOptions: MenuItemValue[];
  watch: UseFormWatch<VaultsBlockValues>;
}

export function Filters({
  control,
  assetOptions,
  watch,
}: FiltersProps): JSX.Element {
  const { classes, cx } = useFilters();

  const isMDDown = useIsMDDown();

  const networkList: MenuItemValue[] = useMemo(
    () => [
      getAnyOption(t('vaults.vault-networks.any')),
      {
        value: VAULT_NETWORK.ETHEREUM,
        label: t('vaults.vault-networks.Ethereum'),
      },
      {
        value: VAULT_NETWORK.BNB_CHAIN,
        label: t('vaults.vault-networks.BNB-Chain'),
      },
      {
        value: VAULT_NETWORK.POLYGON,
        label: t('vaults.vault-networks.Polygon'),
      },
      {
        value: VAULT_NETWORK.AVALANCHE,
        label: t('vaults.vault-networks.Avalanche'),
      },
      {
        value: VAULT_NETWORK.FANTOM,
        label: t('vaults.vault-networks.Fantom'),
      },
    ],
    [],
  );

  const typeList: MenuItemValue[] = useMemo(
    () => [
      getAnyOption(t('vaults.vault-types.any')),
      {
        value: VAULT_TYPE.YIELD_CONVERTER,
        label: t('vaults.vault-types.Yield-Converter'),
      },
      {
        value: VAULT_TYPE.STABILITY_POOL,
        label: t('vaults.vault-types.Stability-Pool'),
      },
      {
        value: VAULT_TYPE.CROSS_CHAIN_STAKING,
        label: t('vaults.vault-types.Cross-Chain-Staking'),
      },
    ],
    [],
  );

  const networkFilterValue = watch('networkFilter');
  const typeFilterValue = watch('typeFilter');
  const assetFilterValue = watch('assetFilter');

  return (
    <div className={classes.root}>
      <div className={classes.filters}>
        <FilterField
          className={cx(
            classes.filter,
            networkFilterValue !== ANY_OPTION && classes.selectedFilter,
          )}
          name="networkFilter"
          control={control}
          items={networkList}
          smMaxHeight={280}
        />
        <FilterField
          className={cx(
            classes.filter,
            typeFilterValue !== ANY_OPTION && classes.selectedFilter,
          )}
          name="typeFilter"
          control={control}
          items={typeList}
          smMaxHeight={210}
        />
        <FilterField
          className={cx(
            classes.filter,
            assetFilterValue !== ANY_OPTION && classes.selectedFilter,
          )}
          name="assetFilter"
          control={control}
          items={assetOptions}
          smMaxHeight={140}
        />
        <CheckboxField
          className={classes.deposited}
          name="depositedFilter"
          control={control}
          label={t('vaults.vault-filters.deposited')}
        />
      </div>
      {!isMDDown && <SortFilterTab />}
    </div>
  );
}
