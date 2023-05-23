import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { QueryState } from '@redux-requests/core';
import { RequestCreator, useQuery } from '@redux-requests/react';
import { BigNumber } from 'bignumber.js';
import { ZERO } from 'modules/common';
import { truncateNumber } from 'utils';
import { useDebounceValue } from '../hooks';

type TxFeeOutput = QueryState<BigNumber> & {
  value: string;
};

type TxFeeProps = {
  children: (data: TxFeeOutput) => JSX.Element | null;
  value: string;
  callback: RequestCreator<BigNumber>;
};

export function TxFee({
  children,
  value,
  callback,
}: TxFeeProps): JSX.Element | null {
  const query = useQuery({ type: callback });
  const dispatch = useDispatch();
  const debouncedValue = useDebounceValue(value, 400);

  useEffect(() => {
    const convertedValue = new BigNumber(debouncedValue);
    if (convertedValue.isNaN() || convertedValue.isZero()) {
      return;
    }

    dispatch(callback(convertedValue));
  }, [callback, debouncedValue, dispatch]);

  const outputValue =
    new BigNumber(value).isGreaterThan(ZERO) && query.data
      ? truncateNumber(query.data, 5)
      : '0';

  return children({
    ...query,
    data: query.data ?? ZERO,
    value: outputValue,
  });
}
