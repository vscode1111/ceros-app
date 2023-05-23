import BigNumber from 'bignumber.js';
import { useNavigate } from 'react-router-dom';
import { addTokenToWallet } from 'store';
import {
  CompletedModal,
  TransactionFailedModal,
  useLoadingOverlay,
  ABNBC_ADDRESS,
  UseTransactionActionData,
} from 'modules/common';
import { VaultsRoutesConfig } from '../Routes';
import { t } from 'modules/i18n';
import { Button } from '@mui/material';
import { useDispatchRequest } from '@redux-requests/react';
import { FieldValues } from 'react-hook-form';

interface FormProps<T extends FieldValues> {
  onSubmit: (values: T) => void;
}

interface ActionFormProps<T> extends FormProps<T> {
  Form: (props: FormProps<T>) => JSX.Element;
  loading: boolean;
  data: UseTransactionActionData;
  error?: Error;
  amount: string | BigNumber | null;
  completedTitle: string;
}

export function ActionForm<T extends FieldValues>({
  Form,
  loading,
  data,
  error,
  amount,
  completedTitle,
  onSubmit,
}: ActionFormProps<T>): JSX.Element | null {
  const navigate = useNavigate();
  const dispatch = useDispatchRequest();

  useLoadingOverlay(loading);

  if (data?.receipt) {
    return (
      <CompletedModal
        title={completedTitle}
        deposited={t('units.aBNBc-value', {
          value: amount || '',
        })}
        recipientAddress={data?.receipt.to}
        txHash={data?.receipt.transactionHash}
        onOk={() => {
          navigate(VaultsRoutesConfig.dashboard.generatePath());
        }}
      >
        <Button
          style={{ marginTop: 20 }}
          size="large"
          variant="outlined"
          onClick={() => {
            void dispatch(
              addTokenToWallet({
                address: ABNBC_ADDRESS,
                symbol: t('units.aBNBc'),
                decimals: 18,
              }),
            );
          }}
        >
          {t('modal.completed.add-unit-to-wallet', { unit: 'aBNBc' })}
        </Button>
      </CompletedModal>
    );
  }

  if (error) {
    return (
      <TransactionFailedModal
        txHash={data?.transactionHash}
        onClose={() => navigate(VaultsRoutesConfig.dashboard.generatePath())}
      />
    );
  }

  return <Form onSubmit={onSubmit} />;
}
