import { Vault } from '../hooks/useVaults';
import { VAULT_NETWORK, VAULT_TYPE, VAULT_ASSET } from '../hooks/constants';
import {
  getYieldConverterApy,
  getYieldConverterTvl,
  getYieldConverterDeposit,
  getYieldConverterYield,
} from 'modules/vaults';
import { YieldConverterDepositForm } from '../components/YieldConverter/Deposit/YieldConverterDepositForm';
import { YieldConverterWithdrawForm } from '../components/YieldConverter/Withdraw/YieldConverterWithdrawForm';
import { YieldConverterClaimForm } from '../components/YieldConverter/Claim/YieldConverterClaimForm';

export const YIELD_CONVERTER_VAULT: Vault = {
  id: 'yield-converter',
  network: VAULT_NETWORK.BNB_CHAIN,
  type: VAULT_TYPE.YIELD_CONVERTER,
  asset: VAULT_ASSET.ABNBC,
  title: 'vaults.vault-item.yield-converter-title',
  description: 'vaults.vault-item.yield-converter-description',
  descriptionTooltip: 'vaults.vault-item.yield-converter-description-tooltip',
  apyAction: getYieldConverterApy,
  tvlAction: getYieldConverterTvl,
  depositAction: getYieldConverterDeposit,
  yieldAction: getYieldConverterYield,
  depositForm: YieldConverterDepositForm,
  withdrawForm: YieldConverterWithdrawForm,
  claimForm: YieldConverterClaimForm,
};
