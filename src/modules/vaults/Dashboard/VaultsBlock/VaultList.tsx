import { uid } from 'react-uid';
import { VaultItem } from './VaultItem';
import { useVaultLitsStyles } from './useVaultLitsStyles';
import { Vault } from '../../hooks/useVaults';

interface VaultListProps {
  vaults: Vault[];
}

export function VaultList({ vaults }: VaultListProps): JSX.Element {
  const { classes } = useVaultLitsStyles();
  return (
    <div className={classes.root}>
      {vaults.map(item => (
        <VaultItem key={uid(item)} item={item} />
      ))}
    </div>
  );
}
