/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bignumber.js';
import { useMemo } from 'react';
import { YIELD_CONVERTER_VAULT } from '../config/yieldConverterVault';
import { STABILITY_POOL_VAULT } from '../config/stabilityPoolVault';
import { CROSS_CHAIN_STAKING_VAULT } from '../config/crossChainStakingVault';
import { CreateActionResult } from 'redux-smart-actions';
import { RequestAction } from '@redux-requests/core';
import { VAULT_NETWORK, VAULT_TYPE, VAULT_ASSET } from './constants';
import { useCreateVault } from './createVault';

export interface Vault {
  id: string;
  network: VAULT_NETWORK;
  type: VAULT_TYPE;
  asset: VAULT_ASSET;
  title: string;
  description: string;
  descriptionTooltip: string;
  apy?: BigNumber; // Real-time calculated
  tvl?: BigNumber; // Real-time calculated
  deposit?: BigNumber; // Real-time calculated
  yield?: BigNumber; // Real-time calculated
  apyAction: CreateActionResult<RequestAction<BigNumber, BigNumber>, any>;
  tvlAction: CreateActionResult<RequestAction<BigNumber, BigNumber>, any>;
  depositAction: CreateActionResult<RequestAction<BigNumber, BigNumber>, any>;
  yieldAction: CreateActionResult<RequestAction<BigNumber, BigNumber>, any>;
  depositForm: () => JSX.Element | null;
  withdrawForm: () => JSX.Element | null;
  claimForm: () => JSX.Element | null;
}

export function useVaults(): Vault[] {
  const yieldConverterVault = useCreateVault(YIELD_CONVERTER_VAULT);
  const stabilityPoolVault = useCreateVault(STABILITY_POOL_VAULT);
  const crossChainStakingVault = useCreateVault(CROSS_CHAIN_STAKING_VAULT);

  const vaults: Vault[] = useMemo(() => {
    return [yieldConverterVault, stabilityPoolVault, crossChainStakingVault];
  }, [yieldConverterVault, stabilityPoolVault, crossChainStakingVault]);

  return vaults;
}
