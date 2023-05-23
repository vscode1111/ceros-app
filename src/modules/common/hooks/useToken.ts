import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

enum Token {
  ABNBC = 'ABNBC',
  BNB = 'BNB',
}

const SUPPORTED_TOKENS = [Token.ABNBC, Token.BNB];

export function useToken(): Token {
  const [searchParams] = useSearchParams();
  return useMemo(() => {
    const queryToken = searchParams.get('token')?.toUpperCase() as Token;

    if (!queryToken || !SUPPORTED_TOKENS.includes(queryToken)) {
      return SUPPORTED_TOKENS[0];
    }

    return queryToken;
  }, [searchParams]);
}
