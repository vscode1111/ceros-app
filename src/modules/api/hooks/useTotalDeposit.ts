import BigNumber from 'bignumber.js';
import { useQuery } from '@redux-requests/react';
import { ZERO } from 'modules/common';
import { useEffect, useMemo, useState } from 'react';
import { getaBNBcPrice } from 'store';
import { getYieldConverterDeposit } from 'modules/vaults';
import { LoadingData } from 'types';

export function useTotalDeposit(): LoadingData<BigNumber> {
  const [data, setData] = useState(ZERO);

  const { data: aBNBcPrice } = useQuery({
    type: getaBNBcPrice,
  });

  const { loading: yieldConvertDepositLoading, data: yieldConvertDeposit } =
    useQuery({
      type: getYieldConverterDeposit,
    });

  const loading = useMemo(
    () => yieldConvertDepositLoading,
    [yieldConvertDepositLoading],
  );

  useEffect(() => {
    if (loading || !yieldConvertDeposit || !aBNBcPrice) {
      return;
    }

    setData(yieldConvertDeposit?.multipliedBy(aBNBcPrice));
  }, [loading, yieldConvertDeposit, aBNBcPrice]);

  return { loading, data };
}
