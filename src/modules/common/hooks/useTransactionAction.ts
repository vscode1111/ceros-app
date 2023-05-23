import { useCallback, useEffect, useState } from 'react';
import { IWeb3SendResult } from '@ankr.com/provider';
import {
  RequestCreator,
  useDispatchRequest,
  useQuery,
} from '@redux-requests/react';
import { TransactionReceipt } from 'web3-core';

export interface UseTransactionActionData {
  receipt?: TransactionReceipt;
  transactionHash?: string;
}

interface UseTransactionAction<T extends RequestCreator<IWeb3SendResult>> {
  loading: boolean;
  executed: boolean;
  data: UseTransactionActionData;
  error?: Error;
  reset: () => void;
  executeAction: (...params: Parameters<T>) => void;
}

export function useTransactionAction<T extends RequestCreator<IWeb3SendResult>>(
  action: T,
): UseTransactionAction<T> {
  const dispatch = useDispatchRequest();
  const [txError, setTxError] = useState<Error>();
  const [receipt, setReceipt] = useState<TransactionReceipt>();
  const [executed, setExecuted] = useState(false);
  const [forceReset, setForceReset] = useState(false);
  const { data, error: actionError } = useQuery({
    type: action,
    autoReset: true,
  });

  const receiptPromise = data?.receiptPromise;
  useEffect(() => {
    if (!receiptPromise) {
      return;
    }

    void receiptPromise.once('receipt', receipt => {
      setReceipt(receipt);
    });

    void receiptPromise.once('error', error => {
      setTxError(error);
    });
  }, [receiptPromise]);

  const executeAction = useCallback(
    (...values) => {
      setExecuted(true);
      void dispatch(action(...values)).finally(() => {
        setExecuted(false);
        setForceReset(false);
      });
    },
    [action, dispatch],
  );

  const reset = useCallback(() => {
    setForceReset(true);
    setReceipt(undefined);
  }, [setForceReset, setReceipt]);

  const error = txError || actionError;
  const loading = forceReset
    ? false
    : !!(data?.transactionHash && !receipt && !error);

  return {
    error,
    loading,
    executed,
    data: {
      receipt,
      transactionHash: forceReset ? undefined : data?.transactionHash,
    },
    executeAction,
    reset,
  };
}
