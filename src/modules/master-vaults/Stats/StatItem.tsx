import { useStatItemStyles } from './useStatItemStyles';
import { Typography } from '@mui/material';
import {
  useIsMDDown,
  ColumnItem,
  useFormStyles,
  Tooltip,
} from 'modules/common';
import { Stat } from './StatList';
import { useMemo } from 'react';
import { t } from 'modules/i18n';

interface StatItemProps {
  item: Stat;
}

export function StatItem({ item }: StatItemProps): JSX.Element {
  const { classes: formClasses } = useFormStyles();
  const { classes, cx } = useStatItemStyles();
  const isMDDown = useIsMDDown();

  const nameColumn = useMemo(
    () => (
      <div className={cx(classes.titleWrapper, classes.name)}>
        <div
          className={classes.square}
          style={{ backgroundColor: item.color }}
        />
        <Typography variant="h6">{item.title}</Typography>
      </div>
    ),
    [classes, item, cx],
  );

  const currentAllocationColumn = useMemo(
    () => (
      <div
        className={cx(classes.allocationWrapper, classes.allocationBarColumn)}
      >
        <div className={classes.allocationBar}>
          <div
            className={classes.innerAllocationBar}
            style={{
              width: `${item.currentAllocation}%`,
              backgroundColor: item.color,
            }}
          />
        </div>
        <Typography className={classes.allocationText} variant="h6">
          {item.currentAllocation} %
        </Typography>
      </div>
    ),
    [classes, item, cx],
  );

  return (
    <div className={classes.root}>
      {isMDDown && (
        <div className={classes.topRow}>
          {nameColumn}
          {currentAllocationColumn}
        </div>
      )}
      <div className={classes.container}>
        {!isMDDown && nameColumn}
        <ColumnItem
          value={<div className={classes.apy}>{item.apy}</div>}
          description={
            isMDDown && (
              <div className={formClasses.vaultsHeaderItem}>
                <Typography variant="body2">
                  {t('master-vaults.table.header.apy')}
                </Typography>
                <Tooltip title={t('master-vaults.table.header.apy-tooltip')} />
              </div>
            )
          }
        />
        <ColumnItem
          value={<div className={classes.allocation}>{item.allocation}</div>}
          description={
            isMDDown && (
              <div className={formClasses.vaultsHeaderItem}>
                <Typography variant="body2">
                  {t('master-vaults.table.header.allocation')}
                </Typography>
                <Tooltip
                  title={t('master-vaults.table.header.allocation-tooltip')}
                />
              </div>
            )
          }
        />
        <ColumnItem
          className={classes.tvlColumn}
          value={<div className={classes.tvl}>{item.tvl}</div>}
          description={
            isMDDown && (
              <div className={formClasses.vaultsHeaderItem}>
                <Typography variant="body2">
                  {t('master-vaults.table.header.tvl')}
                </Typography>
                <Tooltip title={t('master-vaults.table.header.tvl-tooltip')} />
              </div>
            )
          }
        />
        {!isMDDown && currentAllocationColumn}
      </div>
    </div>
  );
}
