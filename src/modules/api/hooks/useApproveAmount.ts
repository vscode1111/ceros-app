import BigNumber from 'bignumber.js';
import { useCallback, useEffect } from 'react';
import { RequestAction } from '@redux-requests/core';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import { CreateActionResult } from 'redux-smart-actions';
import { TransactionReceipt } from 'web3-core';
import { ZERO } from 'modules/common';
import { connect } from 'modules/auth';

interface UseApproveAmountResult {
  loading: boolean;
  approve: (amount: BigNumber) => Promise<void>;
  approvedAmount: BigNumber;
}

export function useApproveAmount(
  approve: CreateActionResult<
    RequestAction<TransactionReceipt, TransactionReceipt>
  >,
  getApprovedAmount: CreateActionResult<RequestAction<BigNumber, BigNumber>>,
): UseApproveAmountResult {
  const dispatch = useDispatchRequest();
  const { data: currentAccount } = useQuery({
    type: connect,
  });
  const { data } = useQuery({
    type: getApprovedAmount,
  });
  const { loading } = useQuery({
    type: approve,
  });

  const approvedAmount = data || ZERO;
  const approveAmount = useCallback(
    async (amount: BigNumber) => {
      if (amount.isLessThanOrEqualTo(approvedAmount)) {
        return;
      }

      await dispatch(approve(amount));
    },
    [approve, approvedAmount, dispatch],
  );

  useEffect(() => {
    if (!currentAccount) {
      return;
    }

    void dispatch(getApprovedAmount());
  }, [currentAccount, dispatch, getApprovedAmount]);

  return {
    loading,
    approvedAmount,
    approve: approveAmount,
  };
}
