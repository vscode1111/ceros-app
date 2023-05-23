import { ReactNode } from 'react';
import { useQuery } from '@redux-requests/react';
import { getAccount } from 'store';

type Props = {
  children: ReactNode;
};

export function GuardIsConnected({ children }: Props): JSX.Element | null {
  const { data: currentAccount } = useQuery({ type: getAccount });

  if (!currentAccount) {
    return null;
  }

  return children as JSX.Element;
}
