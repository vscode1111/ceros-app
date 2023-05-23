import { Form } from './Form';
import { useTransactionAction } from 'modules/common';
import { t } from 'modules/i18n';
import { useCallback } from 'react';
import { useQuery } from '@redux-requests/react';
import { ActionForm } from '../../ActionForm';
import { getYieldConverterYield } from '../../../actions/YieldConverter/getYieldConverterYield';
import { yieldConverterClaim } from '../../../actions/YieldConverter/yieldConverterClaim';

export function YieldConverterClaimForm(): JSX.Element | null {
  const { data: claimAmount } = useQuery({
    type: getYieldConverterYield,
  });

  const { loading, data, error, executeAction } =
    useTransactionAction(yieldConverterClaim);

  const handleSubmit = useCallback(() => {
    executeAction();
  }, [executeAction]);

  return (
    <ActionForm
      Form={Form}
      loading={loading}
      data={data}
      error={error}
      amount={claimAmount}
      completedTitle={t('modal.completed.claim-title')}
      onSubmit={handleSubmit}
    />
  );
}
