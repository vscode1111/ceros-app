import { ReactString } from 'types';
import { ReactComponent as NormalAbnbcSVG } from 'modules/common/assets/tokens/big/normal-abnbc.svg';
import { ReactComponent as DepositedAbnbcSVG } from 'modules/common/assets/tokens/big/deposited-abnbc.svg';
import { ReactComponent as NormalSikkaSVG } from 'modules/common/assets/tokens/big/normal-sikka.svg';
import { ReactComponent as DepositedSikkaSVG } from 'modules/common/assets/tokens/big/deposited-sikka.svg';
import { ReactComponent as NormalCoinsSVG } from 'modules/common/assets/tokens/big/normal-coins.svg';
import { ReactComponent as DepositedCoinsSVG } from 'modules/common/assets/tokens/big/deposited-coins.svg';

export enum VAULT_NETWORK {
  ETHEREUM = 'ETHEREUM',
  BNB_CHAIN = 'BNB_CHAIN',
  POLYGON = 'POLYGON',
  AVALANCHE = 'AVALANCHE',
  FANTOM = 'FANTOM',
}

export enum VAULT_TYPE {
  YIELD_CONVERTER = 'YIELD_CONVERTER',
  STABILITY_POOL = 'STABILITY_POOL',
  CROSS_CHAIN_STAKING = 'CROSS_CHAIN_STAKING',
}

export enum VAULT_ASSET {
  ABNBC = 'ABNBC',
  SIKKA = 'SIKKA',
  VAULT_NAME = 'VAULT_NAME',
}

export interface IVaultAssetConfig {
  title: string;
  normalIcon: ReactString;
  depositedIcon?: ReactString;
}

const VAULT_ASSET_CONFIG: Record<VAULT_ASSET, IVaultAssetConfig> = {
  ABNBC: {
    title: 'vaults.vault-assets.aBNBc',
    normalIcon: <NormalAbnbcSVG />,
    depositedIcon: <DepositedAbnbcSVG />,
  },
  SIKKA: {
    title: 'vaults.vault-assets.SIKKA',
    normalIcon: <NormalSikkaSVG />,
    depositedIcon: <DepositedSikkaSVG />,
  },
  VAULT_NAME: {
    title: 'vaults.vault-assets.coin',
    normalIcon: <NormalCoinsSVG />,
    depositedIcon: <DepositedCoinsSVG />,
  },
};

export const getVaultAssetConfig = (
  asset: VAULT_ASSET,
): IVaultAssetConfig | undefined => VAULT_ASSET_CONFIG[asset];
