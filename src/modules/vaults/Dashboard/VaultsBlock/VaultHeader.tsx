import { Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { useVaultHeaderStyles } from './useVaultHeaderStyles';
import {
  CurrencyTab,
  Tooltip,
  useFormStyles,
  useIsMDDown,
} from 'modules/common';
import { SortFilterTab } from './SortFilterTab';

export function VaultHeader(): JSX.Element {
  const { classes } = useVaultHeaderStyles();
  const { classes: formClasses } = useFormStyles();

  const isMDDown = useIsMDDown();

  return (
    <div className={classes.root}>
      {isMDDown && (
        <div className={classes.tabs}>
          <SortFilterTab />
          <CurrencyTab />
        </div>
      )}
      <div className={classes.vaultsContainer}>
        <div
          className={formClasses.vaultsHeaderItem}
          style={{ marginLeft: -30 }}
        >
          <Typography variant="h6">
            {t('vaults.vault-header.vault-title')}
          </Typography>
        </div>
        {!isMDDown && <div />}
        <div />
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('vaults.vault-header.deposit-title')}
          </Typography>
          <Tooltip title={t('vaults.vault-header.deposit-tooltip')} />
        </div>
        <div className={formClasses.vaultsHeaderItem}>
          <Typography variant="h6">
            {t('vaults.vault-header.yield-title')}
          </Typography>
          <Tooltip title={t('vaults.vault-header.yield-tooltip')} />
        </div>
        {!isMDDown && <CurrencyTab />}
      </div>
    </div>
  );
}
