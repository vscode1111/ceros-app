import { ReactElement } from 'react';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import { CHAIN_ID } from 'modules/common';
import { getAccount, getChainId } from 'store';
import { switchNetwork } from 'modules/auth';
import { Connect } from './Connect';
import { UnsupportedNetwork } from './UnsupportedNetwork';

interface IGuardRouteProps {
  children: ReactElement;
}

export function GuardRoute({ children }: IGuardRouteProps): JSX.Element {
  const { data: currentAccount } = useQuery({ type: getAccount });
  const { data: chainId } = useQuery({ type: getChainId });
  const dispatch = useDispatchRequest();

  if (!currentAccount || !chainId) {
    return (
      <div style={{ height: 'calc(100vh - 300px)' }}>
        <Connect requiredChainId={CHAIN_ID} />
      </div>
    );
  }

  if (currentAccount && CHAIN_ID !== chainId) {
    return (
      <UnsupportedNetwork
        currentChainId={chainId}
        requiredChainId={CHAIN_ID}
        onSwitch={() => dispatch(switchNetwork())}
      />
    );
  }

  return children;
}
