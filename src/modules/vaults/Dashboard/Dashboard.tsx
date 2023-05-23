import { PerfomanceBlock } from './PerfomanceBlock/PerfomanceBlock';
import { useDashboardStyles } from './useDashboardStyles';
import { VaultsBlock } from './VaultsBlock/VaultsBlock';

export function Dashboard(): JSX.Element {
  const { classes } = useDashboardStyles();
  return (
    <div className={classes.root}>
      <PerfomanceBlock />
      <VaultsBlock />
    </div>
  );
}
