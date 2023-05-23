import { VaultsBlock } from './VaultsBlock/VaultsBlock';
import { StatsBlock } from './StatsBlock/StatsBlock';
import { useDashboardStyles } from './useDashboardStyles';

export function Dashboard(): JSX.Element {
  const { classes } = useDashboardStyles();
  return (
    <div className={classes.root}>
      <StatsBlock />
      <VaultsBlock />
    </div>
  );
}
