import { useIsSMDown } from 'modules/common';
import { useVaultsBlockStyles } from './useVaultsBlockStyles';
import { VaultsList } from './VaultsList';
import { VaultsHeader } from './VaultsHeader';

export function VaultsBlock(): JSX.Element {
  const { classes } = useVaultsBlockStyles();
  const isSMDown = useIsSMDown();

  return (
    <div className={classes.root}>
      {!isSMDown && <VaultsHeader />}
      <VaultsList />
    </div>
  );
}
