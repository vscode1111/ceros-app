import ABNBC_ABI from './contracts/aBNBc.json';
import ABNBC_ABI_PROXY from './contracts/aBNBcProxy.json';
import YIELD_CONVERTER_ABI from './contracts/YieldConverter.json';
import PANCAKE_PAIR_BNB_ABI from './contracts/PancakePairBNB.json';
import {
  AvailableReadProviders,
  EEthereumNetworkId,
  Web3KeyReadProvider,
  Web3KeyWriteProvider,
} from '@ankr.com/provider';
import { AbiItem } from 'web3-utils';
import {
  ABNBC_ADDRESS,
  YIELD_CONVERTER_CONTRACT_ADDRESS,
  PANCAKE_PAIR_BNB_CONTRACT,
  PANCAKE_PAIR_ABNBC_CONTRACT,
} from 'modules/common';
import { ProviderManagerSingleton } from './ProviderManagerSingleton';
import { ABNBc, ABNBcProxy, PancakePairBNB, YieldConverter } from './types';
import { BaseContract } from './types/types';

export class BinanceSDK {
  private static instance?: BinanceSDK;

  private readonly provider: Web3KeyWriteProvider;

  public get currentAccount(): string {
    return this.provider.currentAccount;
  }

  private constructor(provider: Web3KeyWriteProvider) {
    BinanceSDK.instance = this;

    this.provider = provider;
  }

  public static async getInstance(): Promise<BinanceSDK> {
    const provider =
      await ProviderManagerSingleton.getInstance().getETHWriteProvider();

    if (BinanceSDK.instance) {
      return BinanceSDK.instance;
    }

    const instance = new BinanceSDK(provider);
    const isBinanceChain = await BinanceSDK.isBinanceNetwork(provider);

    if (isBinanceChain && !provider.isConnected()) {
      await provider.connect();
    }

    return instance;
  }

  private static async isBinanceNetwork(
    provider: Web3KeyWriteProvider,
  ): Promise<boolean> {
    const web3 = provider.getWeb3();
    const chainId = await web3.eth.getChainId();

    return [
      EEthereumNetworkId.smartchain,
      EEthereumNetworkId.smartchainTestnet,
    ].includes(chainId);
  }

  private async getContract<T extends BaseContract>(
    address: string,
    abi: unknown,
    provider?: Web3KeyReadProvider,
  ): Promise<T> {
    const web3 = (provider || (await this.getProvider())).getWeb3();

    return new web3.eth.Contract(abi as AbiItem[], address) as unknown as T;
  }

  public async getProvider(isForceRead = false): Promise<Web3KeyWriteProvider> {
    if (isForceRead) {
      return this.provider;
    }

    const isBinanceChain = await BinanceSDK.isBinanceNetwork(this.provider);

    if (isBinanceChain && !this.provider.isConnected()) {
      await this.provider.connect();
    }

    return this.provider;
  }

  public getaBNBcContract(): Promise<ABNBc> {
    return this.getContract(ABNBC_ADDRESS, ABNBC_ABI);
  }

  public getaBNBcProxyContract(): Promise<ABNBcProxy> {
    return this.getContract(ABNBC_ADDRESS, ABNBC_ABI_PROXY);
  }

  public async getYieldConverterContract(): Promise<YieldConverter> {
    return this.getContract(
      YIELD_CONVERTER_CONTRACT_ADDRESS,
      YIELD_CONVERTER_ABI,
    );
  }

  public async getPancakePairBNBContract(): Promise<PancakePairBNB> {
    return this.getContract(
      PANCAKE_PAIR_BNB_CONTRACT,
      PANCAKE_PAIR_BNB_ABI,
      await ProviderManagerSingleton.getInstance().getETHReadProvider(
        AvailableReadProviders.binanceChain,
      ),
    );
  }

  public async getPancakePairaBNBcContract(): Promise<PancakePairBNB> {
    return this.getContract(
      PANCAKE_PAIR_ABNBC_CONTRACT,
      PANCAKE_PAIR_BNB_ABI,
      await ProviderManagerSingleton.getInstance().getETHReadProvider(
        AvailableReadProviders.binanceChain,
      ),
    );
  }
}
