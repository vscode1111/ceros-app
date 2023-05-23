import BigNumber from 'bignumber.js';
import { WithdrawFormValues, Form } from './Form';
import { useTransactionAction } from 'modules/common';
import { t } from 'modules/i18n';
import { useCallback, useState } from 'react';
import { yieldConverterWithdraw } from '../../../actions/YieldConverter/yieldConverterWithdraw';
import { ActionForm } from '../../ActionForm';

export function YieldConverterWithdrawForm(): JSX.Element | null {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const { loading, data, error, executeAction } = useTransactionAction(
    yieldConverterWithdraw,
  );

  const handleSubmit = useCallback(
    (values: WithdrawFormValues) => {
      setWithdrawAmount(values.withdrawAmount);
      executeAction(new BigNumber(values.withdrawAmount));
    },
    [setWithdrawAmount, executeAction],
  );

  return (
    <ActionForm
      Form={Form}
      loading={loading}
      data={data}
      error={error}
      amount={withdrawAmount}
      completedTitle={t('modal.completed.withdraw-title')}
      onSubmit={handleSubmit}
    />
  );
}
