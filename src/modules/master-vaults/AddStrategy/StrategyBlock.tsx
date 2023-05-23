import BigNumber from 'bignumber.js';
import { useIsSMDown } from 'modules/common';
import { useStrategyBlockStyles } from './useStrategyBlockStyles';
import { Strategy, StrategyList } from './StrategyList';
import { StrategyHeader } from './StrategyHeader';
import { useMemo } from 'react';
import { t } from 'modules/i18n';

export function StrategyBlock(): JSX.Element {
  const { classes } = useStrategyBlockStyles();
  const isSMDown = useIsSMDown();

  const vaults: Strategy[] = useMemo(
    () => [
      {
        title: t('master-vaults.strategy.item.title'),
        description: 'Cross-Chain Staking Pool',
        descriptionTooltip: 'descriptionTooltip',
        apy: new BigNumber(23.9),
        allocation: new BigNumber(23.9),
      },
      {
        title: t('master-vaults.strategy.item.title'),
        description: 'Instant Liquidity Pool',
        descriptionTooltip: 'descriptionTooltip',
        apy: new BigNumber(23.9),
        allocation: new BigNumber(23.9),
      },
      {
        title: t('master-vaults.strategy.item.title'),
        description: 'Instant Liquidity Pool',
        descriptionTooltip: 'descriptionTooltip',
        apy: new BigNumber(23.9),
        allocation: new BigNumber(23.9),
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      {!isSMDown && <StrategyHeader />}
      <StrategyList vaults={vaults} />
    </div>
  );
}
