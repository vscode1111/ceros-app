import BigNumber from 'bignumber.js';
import { useQuery } from '@redux-requests/react';
import { ZERO } from 'modules/common';
import { useEffect, useMemo, useState } from 'react';
import { getYieldConverterApy } from 'modules/vaults';
import { LoadingData } from 'types';

export function useTotalApy(): LoadingData<BigNumber> {
  const [data, setData] = useState(ZERO);

  const { loading: yieldConvertApyLoading, data: yieldConvertApy } = useQuery({
    type: getYieldConverterApy,
  });

  const loading = useMemo(
    () => yieldConvertApyLoading,
    [yieldConvertApyLoading],
  );

  useEffect(() => {
    if (loading || !yieldConvertApy) {
      return;
    }

    setData(yieldConvertApy);
  }, [loading, yieldConvertApy]);

  return { loading, data };
}
