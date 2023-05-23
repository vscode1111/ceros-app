import { Vault } from '../hooks/useVaults';
import { VAULT_NETWORK, VAULT_TYPE, VAULT_ASSET } from '../hooks/constants';
import { getCrossChainStakingApy } from '../actions/CrossChainStaking/getCrossChainStakingApy';
import { getCrossChainStakingTvl } from '../actions/CrossChainStaking/getCrossChainStakingTvl';
import { getCrossChainStakingDeposit } from '../actions/CrossChainStaking/getCrossChainStakingDeposit';
import { getCrossChainStakingYield } from '../actions/CrossChainStaking/getCrossChainStakingYield';
import { CrossChainStakingDepositForm } from '../components/CrossChainStaking/Deposit/CrossChainStakingDepositForm';
import { CrossChainStakingClaimForm } from '../components/CrossChainStaking/Claim/CrossChainStakingClaimForm';
import { CrossChainStakingWithdrawForm } from '../components/CrossChainStaking/Withdraw/CrossChainStakingWithdrawForm';

export const CROSS_CHAIN_STAKING_VAULT: Vault = {
  id: 'cross-chain-staking',
  network: VAULT_NETWORK.POLYGON,
  type: VAULT_TYPE.CROSS_CHAIN_STAKING,
  asset: VAULT_ASSET.VAULT_NAME,
  title: 'vaults.vault-item.cross-chain-staking-title',
  description: 'vaults.vault-item.cross-chain-staking-description',
  descriptionTooltip:
    'vaults.vault-item.cross-chain-staking-description-tooltip',
  apyAction: getCrossChainStakingApy,
  tvlAction: getCrossChainStakingTvl,
  depositAction: getCrossChainStakingDeposit,
  yieldAction: getCrossChainStakingYield,
  depositForm: CrossChainStakingDepositForm,
  withdrawForm: CrossChainStakingWithdrawForm,
  claimForm: CrossChainStakingClaimForm,
};
