import BigNumber from 'bignumber.js';

const DEFAULT_DECIMALS = 3;

export function truncateNumber(
  value: BigNumber | number,
  decimals = DEFAULT_DECIMALS,
  toString = false,
): string {
  const bigNumber = value instanceof BigNumber ? value : new BigNumber(value);

  if (toString) return bigNumber.decimalPlaces(decimals, 1).toString();

  return bigNumber.decimalPlaces(decimals, 1).toFormat();
}
