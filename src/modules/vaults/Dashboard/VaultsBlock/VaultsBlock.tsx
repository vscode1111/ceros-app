import { useVaultsBlockStyles } from './useVaultsBlockStyles';
import { VaultList } from './VaultList';
import { VaultHeader } from './VaultHeader';
import { useFormStyles, useIsSMDown } from 'modules/common';
import { Button, Drawer } from '@mui/material';
import { t } from 'modules/i18n';
import { useState } from 'react';
import { FilterDrawerContent } from './FilterDrawerContent';
import { useVaults } from '../../hooks/useVaults';
import { EMPTY_OPTION, useVaultsFilters } from '../../hooks/useVaultsFilters';
import { Filters } from './Filters';
import { FieldValues, useForm } from 'react-hook-form';

export interface VaultsBlockValues extends FieldValues {
  typeFilter: string;
  networkFilter: string;
  assetFilter: string;
  depositedFilter: boolean;
}

export function VaultsBlock(): JSX.Element {
  const { control, watch, setValue } = useForm<VaultsBlockValues>({
    mode: 'onChange',
    defaultValues: {
      networkFilter: EMPTY_OPTION,
      typeFilter: EMPTY_OPTION,
      assetFilter: EMPTY_OPTION,
    },
  });

  const { classes } = useVaultsBlockStyles();
  const { classes: formClasses } = useFormStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  const isSMDown = useIsSMDown();
  const vaults = useVaults();

  const { assetOptions, filteredVaults } = useVaultsFilters(
    vaults,
    watch,
    setValue,
  );

  return (
    <div className={classes.root}>
      {isSMDown ? (
        <Button variant="outlined" onClick={() => setShowDrawer(true)}>
          {t('common.filter')}
        </Button>
      ) : (
        <>
          <Filters
            control={control}
            assetOptions={assetOptions}
            watch={watch}
          />
          <VaultHeader />
        </>
      )}
      <VaultList vaults={filteredVaults} />
      <Drawer
        className={formClasses.drawer}
        anchor="bottom"
        open={showDrawer}
        onClose={() => setShowDrawer(value => !value)}
        PaperProps={{
          style: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          },
        }}
      >
        <FilterDrawerContent
          control={control}
          assetOptions={assetOptions}
          watch={watch}
        />
      </Drawer>
    </div>
  );
}
