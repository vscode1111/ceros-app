import { useStrategyItemStyles } from './useStrategyItemStyles';
import { Typography, Button } from '@mui/material';
import { t } from 'modules/i18n';
import { printLoadingNumber } from 'utils';
import { useMemo } from 'react';
import { Strategy } from './StrategyList';
import {
  Tooltip,
  useFormStyles,
  useIsMDDown,
  ColumnItem,
} from 'modules/common';

interface StrategyItemProps {
  item: Strategy;
}

export function StrategyItem({ item }: StrategyItemProps): JSX.Element {
  const { classes: formClasses } = useFormStyles();
  const { classes } = useStrategyItemStyles({ hasDeposit: false });
  const isMDDown = useIsMDDown();

  const nameColumn = useMemo(() => {
    return (
      <div className={classes.vaultColumn}>
        <ColumnItem
          value={<Typography variant="h4">{t(item.title)}</Typography>}
          description={
            <div className={classes.description}>
              <Typography variant="body2">{t(item.description)}</Typography>
              <Tooltip
                iconClassName={classes.tooltipIcon}
                title={t(item.descriptionTooltip)}
              />
            </div>
          }
          gap="4px"
        />
      </div>
    );
  }, [classes, item]);

  const actionColumn = useMemo(
    () => (
      <div className={classes.actionColumn}>
        <Button className={classes.mainButton} variant="outlined">
          {t('master-vaults.strategy.item.deploy')}
        </Button>
      </div>
    ),
    [classes],
  );

  return (
    <div className={classes.root}>
      {isMDDown && (
        <div className={classes.topRow}>
          {nameColumn}
          {actionColumn}
        </div>
      )}
      <div className={classes.container}>
        {!isMDDown && nameColumn}
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(false, item.apy)}
            </Typography>
          }
          description={
            isMDDown && (
              <div className={formClasses.vaultsHeaderItem}>
                <Typography variant="body2">
                  {t('master-vaults.strategy.header.apy')}
                </Typography>
                <Tooltip
                  title={t('master-vaults.strategy.header.apy-tooltip')}
                />
              </div>
            )
          }
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(true, item.allocation)}
            </Typography>
          }
          description={
            isMDDown && (
              <div className={formClasses.vaultsHeaderItem}>
                <Typography variant="body2">
                  {t('master-vaults.strategy.header.allocation')}
                </Typography>
                <Tooltip
                  title={t('master-vaults.strategy.header.allocation-tooltip')}
                />
              </div>
            )
          }
        />
        {!isMDDown && actionColumn}
      </div>
    </div>
  );
}
