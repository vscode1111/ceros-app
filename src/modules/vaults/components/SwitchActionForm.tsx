import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Vault, useVaults } from '../hooks/useVaults';

interface SwitchActionFormProps {
  selector: (vault: Vault) => () => JSX.Element | null;
}

export function SwitchActionForm({
  selector,
}: SwitchActionFormProps): JSX.Element | null {
  const { vaultId } = useParams();

  const vaults = useVaults();

  const vault = useMemo(
    () => vaults.find(item => item.id === vaultId),
    [vaults, vaultId],
  );

  if (!vault) {
    return null;
  }

  return selector(vault)();
}
