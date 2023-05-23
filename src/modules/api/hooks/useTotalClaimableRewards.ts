import BigNumber from 'bignumber.js';
import { useQuery } from '@redux-requests/react';
import { ZERO } from 'modules/common';
import { useEffect, useMemo, useState } from 'react';
import { getYieldConverterYield } from 'modules/vaults';
import { LoadingData } from 'types';

export function useTotalClaimableRewards(): LoadingData<BigNumber> {
  const [data, setData] = useState(ZERO);

  const { loading: yieldConvertYeildLoading, data: yieldConverterYield } =
    useQuery({
      type: getYieldConverterYield,
    });

  const loading = useMemo(
    () => yieldConvertYeildLoading,
    [yieldConvertYeildLoading],
  );

  useEffect(() => {
    if (loading || !yieldConverterYield) {
      return;
    }

    setData(yieldConverterYield);
  }, [loading, yieldConverterYield]);

  return { loading, data };
}
