import { Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { usePerfomanceBlockStyles } from './usePerfomanceBlockStyles';
import { InfoItem } from './InfoItem';
import { ZERO } from 'modules/common';
import { printLoadingNumber } from 'utils';
import { useMemo } from 'react';
import {
  useTotalDeposit,
  useTotalAnnualRewards,
  useTotalApy,
  useTotalClaimableRewards,
} from 'modules/api';
import { getaBNBcPrice } from 'store';
import { useQuery } from '@redux-requests/react';

export function PerfomanceBlock(): JSX.Element {
  const { data: aBNBcPrice } = useQuery({
    type: getaBNBcPrice,
  });

  const { loading: totalDepositLoading, data: totalDeposit } =
    useTotalDeposit();

  const { loading: totalAnnualRewardsLoading, data: totalAnnualRewards } =
    useTotalAnnualRewards();

  const { loading: totalApyLoading, data: totalApy } = useTotalApy();

  const { loading: totalClaimableRewardLoading, data: totalClaimableReward } =
    useTotalClaimableRewards();

  const hasRewards = useMemo(
    () => !totalClaimableReward.eq(ZERO),
    [totalClaimableReward],
  );

  const { classes } = usePerfomanceBlockStyles({ hasRewards });

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {t('vaults.my-perfomance')}
      </Typography>
      <div className={classes.infoTable}>
        <InfoItem
          title={t('vaults.perfomance-table.deposit-title')}
          tooltip={t('vaults.perfomance-table.deposit-tooltip')}
          values={[printLoadingNumber(totalDepositLoading, totalDeposit, '$')]}
        />
        <div className={classes.line} />
        <InfoItem
          title={t('vaults.perfomance-table.expect-annual-title')}
          tooltip={t('vaults.perfomance-table.expect-annual-tooltip')}
          values={[
            printLoadingNumber(
              totalAnnualRewardsLoading,
              totalAnnualRewards,
              '$',
            ),
            printLoadingNumber(totalApyLoading, totalApy, ' ', '%'),
          ]}
        />
        <div className={classes.line} />
        <InfoItem
          className={classes.rewardsColumn}
          title={t('vaults.perfomance-table.rewards-claimable-title')}
          tooltip={t('vaults.perfomance-table.rewards-claimable-tooltip')}
          values={[
            printLoadingNumber(
              totalClaimableRewardLoading,
              totalClaimableReward.multipliedBy(aBNBcPrice ?? ZERO),
              '$',
            ),
          ]}
        />
      </div>
    </div>
  );
}
