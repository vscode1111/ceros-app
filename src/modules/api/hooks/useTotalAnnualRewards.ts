import BigNumber from 'bignumber.js';
import { ZERO } from 'modules/common';
import { useEffect, useMemo, useState } from 'react';
import { LoadingData } from 'types';
import { useTotalApy } from './useTotalApy';
import { useTotalDeposit } from './useTotalDeposit';

export function useTotalAnnualRewards(): LoadingData<BigNumber> {
  const [data, setData] = useState(ZERO);

  const { loading: totalDepositLoading, data: totalDeposit } =
    useTotalDeposit();

  const { loading: totalApyLoading, data: totalApy } = useTotalApy();

  const loading = useMemo(
    () => totalDepositLoading || totalApyLoading,
    [totalDepositLoading, totalApyLoading],
  );

  useEffect(() => {
    if (loading || !totalDeposit || !totalApy) {
      return;
    }

    setData(totalDeposit?.multipliedBy(totalApy).div(100));
  }, [loading, totalDeposit, totalApy]);

  return { loading, data };
}
