import { Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { useStrategyHeaderStyles } from './useStrategyHeaderStyles';
import { Tooltip, useFormStyles, useIsMDDown } from 'modules/common';

export function StrategyHeader(): JSX.Element {
  const { classes } = useStrategyHeaderStyles();
  const { classes: formClasses } = useFormStyles();
  const isMDDown = useIsMDDown();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={formClasses.vaultsHeaderItem}
          style={{ marginLeft: -30 }}
        >
          <Typography variant="h6">
            {t('master-vaults.strategy.header.strategy')}
          </Typography>
          <Tooltip
            title={t('master-vaults.strategy.header.strategy-tooltip')}
          />
        </div>
        {!isMDDown && (
          <>
            <div className={formClasses.vaultsHeaderItem}>
              <Typography variant="h6">
                {t('master-vaults.strategy.header.apy')}
              </Typography>
              <Tooltip title={t('master-vaults.strategy.header.apy-tooltip')} />
            </div>
            <div className={formClasses.vaultsHeaderItem}>
              <Typography variant="h6">
                {t('master-vaults.strategy.header.allocation')}
              </Typography>
              <Tooltip
                title={t('master-vaults.strategy.header.allocation-tooltip')}
              />
            </div>
            <div />
          </>
        )}
      </div>
    </div>
  );
}
