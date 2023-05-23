import { ReactNode } from 'react';
import { EEthereumNetworkId } from '@ankr.com/provider';

import { ReactComponent as BinanceChainSVG } from '../assets/binance.svg';

export function getChainIcon(chainId: EEthereumNetworkId): ReactNode {
  switch (chainId) {
    case EEthereumNetworkId.smartchain:
    case EEthereumNetworkId.smartchainTestnet:
      return <BinanceChainSVG />;
    default:
      return null;
  }
}
