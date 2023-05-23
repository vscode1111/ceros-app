import BigNumber from 'bignumber.js';
import { uid } from 'react-uid';
import { StrategyItem } from './StrategyItem';
import { useStrategyLitsStyles } from './useStrategyLitsStyles';

export interface Strategy {
  title: string;
  description: string;
  descriptionTooltip: string;
  apy: BigNumber;
  allocation: BigNumber;
}

interface StrategyListProps {
  vaults: Strategy[];
}

export function StrategyList({ vaults }: StrategyListProps): JSX.Element {
  const { classes } = useStrategyLitsStyles();
  return (
    <div className={classes.root}>
      {vaults.map(vault => (
        <StrategyItem key={uid(vault)} item={vault} />
      ))}
    </div>
  );
}
