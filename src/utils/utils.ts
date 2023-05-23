import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import { ZERO } from 'modules/common';
import { truncateNumber } from 'utils';
import { fromWei, toWei } from 'web3-utils';
import { t } from 'modules/i18n';

const MAX_LENGTH = 12;

export function cropString(value: string, length = 5): string {
  if (value.length < MAX_LENGTH) {
    return value;
  }

  return `${value.slice(0, length)}...${value.slice(-length + 1)}`;
}

export function keepValueInRange(
  value: BigNumber,
  minValue: BigNumber,
  maxValue: BigNumber,
): BigNumber {
  if (value.isLessThan(minValue)) return minValue;
  if (value.isGreaterThan(maxValue)) return maxValue;

  return value;
}

export function formatPercent(value: number): string {
  return `${value * 100}%`;
}

export function convertFromWei(value: string): BigNumber {
  return new BigNumber(fromWei(value));
}

export function convertToWei(value: BigNumber): string {
  return toWei(value.toString());
}

export function convertToHex(value: BigNumber): string {
  const valueAsWei = Web3.utils.toWei(value.toString());

  return Web3.utils.numberToHex(valueAsWei);
}

export function printLoadingNumber(
  loading: boolean,
  number: BigNumber | undefined | null,
  prefix = '$',
  postfix = ' ',
  koeff = 1 as number | BigNumber,
): string {
  return loading || !number
    ? '\u2026'
    : t('utils.loading-number', {
        prefix,
        number: truncateNumber((number ?? ZERO).multipliedBy(koeff)),
        postfix,
      });
}
