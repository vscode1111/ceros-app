import React from 'react';
import { Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { useStatTableHeaderStyles } from './useStatTableHeaderStyles';
import {
  Tooltip,
  useFormStyles,
  useIsMDDown,
  useIsSMDown,
} from 'modules/common';

export function StatTableHeader(): JSX.Element {
  const { classes } = useStatTableHeaderStyles();
  const { classes: formClasses } = useFormStyles();

  const isMDDown = useIsMDDown();
  const isSMDown = useIsSMDown();

  return (
    <div className={classes.root}>
      <div className={classes.vaultsContainer}>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('master-vaults.table.header.strategy')}
          </Typography>
          <Tooltip title={t('master-vaults.table.header.strategy-tooltip')} />
        </div>
        {!isMDDown && (
          <>
            <div className={formClasses.vaultsHeaderItem}>
              <Typography variant="h6">
                {t('master-vaults.table.header.apy')}
              </Typography>
              <Tooltip title={t('master-vaults.table.header.apy-tooltip')} />
            </div>
            <div className={formClasses.vaultsHeaderItem}>
              <Typography variant="h6">
                {t('master-vaults.table.header.allocation')}
              </Typography>
              <Tooltip
                title={t('master-vaults.table.header.allocation-tooltip')}
              />
            </div>
            <div className={formClasses.vaultsHeaderItem}>
              <Typography variant="h6">
                {t('master-vaults.table.header.tvl')}
              </Typography>
              <Tooltip title={t('master-vaults.table.header.tvl-tooltip')} />
            </div>
          </>
        )}
        {!isSMDown && (
          <div className={formClasses.vaultsHeaderItem}>
            <Typography variant="h6">
              {t('master-vaults.table.header.current-allocation')}
            </Typography>
            <Tooltip
              title={t('master-vaults.table.header.current-allocation-tooltip')}
            />
          </div>
        )}
      </div>
    </div>
  );
}
