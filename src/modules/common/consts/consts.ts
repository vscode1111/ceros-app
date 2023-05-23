import BigNumber from 'bignumber.js';
import { AvailableReadProviders, EEthereumNetworkId } from '@ankr.com/provider';

export enum MultipleActionType {
  Helio = 'helio',
  Carrots = 'carrots',
}

export const HTTP_PROVIDER = process.env
  .REACT_APP_HTTP_PROVIDER as AvailableReadProviders;

export const ABNBC_ADDRESS = process.env.REACT_APP_ABNBC_ADDRESS as string;

export const YIELD_CONVERTER_CONTRACT_ADDRESS = process.env
  .REACT_APP_YIELD_CONVERTER_CONTRACT_ADDRESS as string;
export const PANCAKE_PAIR_BNB_CONTRACT = process.env
  .REACT_APP_PANCAKE_PAIR_BNB_CONTRACT as string;
export const PANCAKE_PAIR_ABNBC_CONTRACT = process.env
  .REACT_APP_PANCAKE_PAIR_ABNBC_CONTRACT as string;

export const APP_ENV = process.env.REACT_APP_ENV as string;

export const EXPLORER_URL = process.env.REACT_APP_EXPLORER_URL as string;

export const CHAIN_ID = (() => {
  const chainId = parseInt(
    process.env.REACT_APP_CHAIN_ID ?? '',
    10,
  ) as EEthereumNetworkId;
  if (!chainId) {
    throw new Error('Chain id must be initialized');
  }

  return chainId;
})();

export const ROOT_PATH = '/';
export const BSD_SCAN_URL = 'https://testnet.bscscan.com';
export const ZERO = new BigNumber(0);
export const ONE = new BigNumber(1);
export const HUNDRED = new BigNumber(100);
export const BORROW_LIMIT_PERCENTS = 95;
export const SAFE_BORROW_LIMIT_PERCENTS = 75;
export const MAX_INT =
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
export const DESKTOP_HEADER_HEIGHT = 80;

export interface Colors {
  dark: string;
  red: string;
  black: string;
  white: string;
  green: string;
  pink: string;
  yellow: string;
  lightGray: string;
  gray: string;
  gray300: string;
  gray400: string;
  gray500: string;
}

export const COLORS: Colors = {
  dark: '#141318',
  red: '#D80303',
  black: '#000000',
  white: '#ffffff',
  green: '#B3E0B7',
  pink: '#F5BCE9',
  yellow: '#EFEA72',
  lightGray: '#F5F5F7',
  gray: '#BCBABA',
  gray300: '#232526',
  gray400: '#454545',
  gray500: '#5E5E5E',
};

export const FONTS = {
  montserrat: 'Montserrat',
};

export const TRANSITION = '0.3s';

export enum SortType {
  NONE = 'NONE',
  ASC = 'ASC',
  DESC = 'DESC',
}
