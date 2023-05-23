import { Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { useVaultsHeaderStyles } from './useVaultsHeaderStyles';
import { Tooltip, useFormStyles } from 'modules/common';

export function VaultsHeader(): JSX.Element {
  const { classes } = useVaultsHeaderStyles();
  const { classes: formClasses } = useFormStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={formClasses.vaultsHeaderItem}
          style={{ marginLeft: -30 }}
        >
          <Typography variant="h6">
            {t('master-vaults.table.header.name')}
          </Typography>
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('master-vaults.table.header.deposit')}
          </Typography>
          <Tooltip
            title={t('master-vaults.table.header.deposit-description')}
          />
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('master-vaults.table.header.withdraw')}
          </Typography>
          <Tooltip
            title={t('master-vaults.table.header.withdraw-description')}
          />
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('master-vaults.table.header.apr')}
          </Typography>
          <Tooltip title={t('master-vaults.table.header.apr-description')} />
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('master-vaults.table.header.tvl')}
          </Typography>
          <Tooltip title={t('master-vaults.table.header.tvl-description')} />
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('master-vaults.table.header.user')}
          </Typography>
          <Tooltip title={t('master-vaults.table.header.user-description')} />
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('vaults.vault-header.yield-title')}
          </Typography>
        </div>
      </div>
    </div>
  );
}
