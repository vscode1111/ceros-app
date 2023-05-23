import { VAULT_NETWORK, VAULT_TYPE, VAULT_ASSET } from '../hooks/constants';
import { getStabilityPoolApy } from '../actions/StabilityPool/getStabilityPoolApy';
import { getStabilityPoolTvl } from '../actions/StabilityPool/getStabilityPoolTvl';
import { getStabilityPoolDeposit } from '../actions/StabilityPool/getStabilityPoolDeposit';
import { getStabilityPoolYield } from '../actions/StabilityPool/getStabilityPoolYield';
import { StabilityPoolDepositForm } from '../components/StabilityPool/Deposit/StabilityPoolDepositForm';
import { StabilityPoolWithdrawForm } from '../components/StabilityPool/Withdraw/StabilityPoolWithdrawForm';
import { StabilityPoolClaimForm } from '../components/StabilityPool/Claim/StabilityPoolClaimForm';
import { Vault } from '../hooks/useVaults';

export const STABILITY_POOL_VAULT: Vault = {
  id: 'stability-pool',
  network: VAULT_NETWORK.POLYGON,
  type: VAULT_TYPE.STABILITY_POOL,
  asset: VAULT_ASSET.SIKKA,
  title: 'vaults.vault-item.stability-pool-title',
  description: 'vaults.vault-item.stability-pool-description',
  descriptionTooltip: 'vaults.vault-item.stability-pool-description-tooltip',
  apyAction: getStabilityPoolApy,
  tvlAction: getStabilityPoolTvl,
  depositAction: getStabilityPoolDeposit,
  yieldAction: getStabilityPoolYield,
  depositForm: StabilityPoolDepositForm,
  withdrawForm: StabilityPoolWithdrawForm,
  claimForm: StabilityPoolClaimForm,
};
