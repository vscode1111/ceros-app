import React from 'react';
import { useVaultItemStyles } from './useVaultItemStyles';
import { Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { HUNDRED, SwitchField, ColumnItem } from 'modules/common';
import { FieldValues, useForm } from 'react-hook-form';
import { ReactComponent as CopySVG } from 'modules/common/assets/copy.svg';

import { cropString, printLoadingNumber } from 'utils';

interface VaultItemProps {
  normalIcon: JSX.Element;
  title: string;
  description: string;
  descriptionTooltip: string;
}

interface VaultsProps {
  item: VaultItemProps;
}
export type ClaimFormValues = FieldValues;

export function VaultItem({ item }: VaultsProps): JSX.Element {
  const { classes } = useVaultItemStyles({ hasDeposit: false });
  const { control } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      status: false,
    },
  });

  return (
    <div className={classes.root}>
      <div className={classes.vaultContainer}>
        <div className={classes.topRow}>
          <div className={classes.vaultColumn}>
            {item.normalIcon}
            <ColumnItem
              value={<Typography variant="h4">{item.title}</Typography>}
              description={
                <div className={classes.description}>
                  <Typography variant="body2">
                    {cropString(item.description)}
                  </Typography>
                  <CopySVG />
                </div>
              }
              gap="2px"
            />
          </div>
        </div>
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, HUNDRED)}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">
                {t('vaults.vault-table.tvl')}
              </Typography>
            </div>
          }
          gap="4px"
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, HUNDRED)}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">
                {t('vaults.vault-table.tvl')}
              </Typography>
            </div>
          }
          gap="4px"
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, HUNDRED, '$')}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">usd</Typography>
            </div>
          }
          gap="4px"
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, HUNDRED, '$')}
            </Typography>
          }
          gap="2px"
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, HUNDRED, '$')}
            </Typography>
          }
          gap="2px"
        />
        <ColumnItem
          value={<SwitchField name="status" control={control} />}
          gap="2px"
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, HUNDRED, '$')}
            </Typography>
          }
          gap="2px"
        />
      </div>
    </div>
  );
}
