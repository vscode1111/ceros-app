import { useCallback } from 'react';
import { t } from 'modules/i18n';
import { UseValidateResult } from './typings';
import { Keccak } from 'sha3';

const stripHexPrefix = (address: string) => {
  return address.slice(0, 2) === '0x' ? address.slice(2) : address;
};

/**
 * Web3 ETH address validation
 * https://github.com/ethereum/web3.js/blob/aaf26c8806bc9fb60cf6dcb6658104963c6c7fc7/packages/web3-utils/src/Utils.js#L140
 */
const checkAddressChecksum = (
  address: string,
  chainId: string | null = null,
) => {
  const stripAddress = stripHexPrefix(address).toLowerCase();
  const prefix = chainId ? `${chainId.toString()}0x` : '';
  const Hash = new Keccak(256);
  Hash.update(prefix + stripAddress);
  const keccakHash = Hash.digest().toString('hex').replace(/^0x/i, '');

  for (let i = 0; i < stripAddress.length; i++) {
    const output =
      parseInt(keccakHash[i], 16) >= 8
        ? stripAddress[i].toUpperCase()
        : stripAddress[i];
    if (stripHexPrefix(address)[i] !== output) {
      return false;
    }
  }
  return true;
};

const isEthAddress = (address: string, chainId = null) => {
  // check if it has the basic requirements of an address
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
    // If it's ALL lowercase or ALL upppercase
  }
  if (
    /^(0x|0X)?[0-9a-f]{40}$/.test(address) ||
    /^(0x|0X)?[0-9A-F]{40}$/.test(address)
  ) {
    return true;
    // Otherwise check each case
  }
  return checkAddressChecksum(address, chainId);
};

export const  useTextValidation = (): UseValidateResult =>
  useCallback((value?: string) => {
    if (!value) {
      return t('validation.required');
    }
    if (value && !isEthAddress(value)) {
      return t('validation.address-invalid');
    }
  }, []);
