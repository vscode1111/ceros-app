import { uid } from 'react-uid';
import { useStatListStyles } from './useStatListStyles';
import { useMemo } from 'react';
import { StatItem } from './StatItem';

export interface Stat {
  title: string;
  apy: string;
  tvl: string;
  currentAllocation: number;
  allocation: number;
  color: string;
}

export function StatList(): JSX.Element {
  const { classes } = useStatListStyles();

  // TODO: Remove mock data
  const vaults: Stat[] = useMemo(
    () => [
      {
        title: 'Vault 1',
        apy: '40%',
        tvl: '8,179,024',
        currentAllocation: 40,
        allocation: 30,
        color: 'red',
      },
      {
        title: 'Vault 2',
        apy: '20%',
        tvl: '8,179,024',
        currentAllocation: 20,
        allocation: 30,
        color: 'green',
      },
      {
        title: 'Vault 3',
        apy: '5%',
        tvl: '8,179,024',
        currentAllocation: 15,
        allocation: 30,
        color: 'blue',
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      {vaults.map(item => (
        <StatItem key={uid(item)} item={item} />
      ))}
    </div>
  );
}
