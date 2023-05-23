import { Typography } from '@mui/material';
import { HUNDRED, ActionButton } from 'modules/common';
import { t } from 'modules/i18n';
import { Link } from 'react-router-dom';
import { InfoItem } from 'modules/vaults/Dashboard/PerfomanceBlock/InfoItem';
import { printLoadingNumber } from 'utils';
import { useStatsBlockStyles } from './useStatsBlockStyles';
import { AreaChartBlock } from './AreaChartBlock';
import { MasterVaultsRoutesConfig } from 'modules/master-vaults';

interface StatsBlockProps {
  enabledVaultCreation?: boolean;
}

export function StatsBlock({
  enabledVaultCreation = true,
}: StatsBlockProps): JSX.Element {
  const { classes } = useStatsBlockStyles({ hasRewards: false });

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {t('master-vaults.dashboard.title')}
      </Typography>
      <div className={classes.infoTable}>
        <div className={classes.infoRow}>
          <div className={classes.infoItem}>
            <InfoItem
              title={t('master-vaults.dashboard.tvl')}
              tooltip={t('master-vaults.dashboard.tvl-description')}
              // TODO: Remove mock data
              values={[printLoadingNumber(false, HUNDRED, '', '%')]}
            />
            <AreaChartBlock />
          </div>
          <div className={classes.infoItem}>
            <InfoItem
              title={t('master-vaults.dashboard.apr')}
              tooltip={t('master-vaults.dashboard.apr-description')}
              // TODO: Remove mock data
              values={[printLoadingNumber(false, HUNDRED, '', '%')]}
            />
            <AreaChartBlock />
          </div>
          <div className={classes.infoItem}>
            <InfoItem
              title={t('master-vaults.dashboard.user')}
              tooltip={t('master-vaults.dashboard.user-description')}
              // TODO: Remove mock data
              values={[printLoadingNumber(false, HUNDRED)]}
            />
            <AreaChartBlock />
          </div>
        </div>
        <div className={classes.infoRow}>
          <InfoItem
            title={t('vaults.perfomance-table.deposit-title')}
            tooltip={t('vaults.perfomance-table.deposit-tooltip')}
            // TODO: Remove mock data
            values={[printLoadingNumber(false, HUNDRED, '$')]}
          />
          <InfoItem
            title={t('vaults.perfomance-table.expect-annual-title')}
            tooltip={t('vaults.perfomance-table.expect-annual-tooltip')}
            // TODO: Remove mock data
            values={[printLoadingNumber(false, HUNDRED, '$')]}
          />
          <InfoItem
            className={classes.rewardsColumn}
            title={t('vaults.perfomance-table.rewards-claimable-title')}
            tooltip={t('vaults.perfomance-table.rewards-claimable-tooltip')}
            // TODO: Remove mock data
            values={[printLoadingNumber(false, HUNDRED, '$')]}
          />
        </div>
        {enabledVaultCreation && (
          <div className={classes.button}>
            <ActionButton
              className={classes.mainButton}
              variant="text"
              component={Link}
              to={MasterVaultsRoutesConfig.create.generatePath()}
            >
              {t('master-vaults.dashboard.create')}
            </ActionButton>
          </div>
        )}
      </div>
    </div>
  );
}
