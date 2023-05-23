import { useEffect } from 'react';
import { useDispatchRequest } from '@redux-requests/react';
import { connect } from '../actions/connect';

export function useAuth(): void {
  const dispatch = useDispatchRequest();

  useEffect(() => {
    const walletId = localStorage.getItem('walletId');

    if (!walletId) {
      return;
    }

    void dispatch(connect(walletId));
  }, [dispatch]);
}
