import { uid } from 'react-uid';
import { VaultItem } from './VaultItem';
import { useVaultsListStyles } from './useVaultsListStyles';
import { ReactComponent as NormalAbnbcSVG } from 'modules/common/assets/tokens/big/normal-abnbc.svg';
import { useMemo } from 'react';

export function VaultsList(): JSX.Element {
  const { classes } = useVaultsListStyles();

  // TODO: Remove mock data
  const vaults = useMemo(
    () => [
      {
        normalIcon: <NormalAbnbcSVG />,
        title: 'Vault 1',
        description: '0x2342340234fsdklfjsklfjs',
        descriptionTooltip: 'Desciprtion 1',
      },
      {
        normalIcon: <NormalAbnbcSVG />,
        title: 'Vault 2',
        description: '0x2342340234fsdklfjsklfjs',
        descriptionTooltip: 'Description 2',
      },
      {
        normalIcon: <NormalAbnbcSVG />,
        title: 'Vault 3',
        description: '0x2342340234fsdklfjsklfjs',
        descriptionTooltip: 'Description 3',
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      {vaults.map(vault => (
        <VaultItem key={uid(vault)} item={vault} />
      ))}
    </div>
  );
}
