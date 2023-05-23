/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bignumber.js';
import {
  MaxButton,
  NumberField,
  Tooltip,
  useFormStyles,
  ZERO,
} from 'modules/common';
import { Button, Typography } from '@mui/material';
import { t, tHTML } from 'modules/i18n';
import { truncateNumber } from 'utils';
import { Control } from 'react-hook-form';
import { getaBNBcRatio } from 'store';
import {
  getYieldConverterCeTokenBalance,
  getYieldConverterName,
} from 'modules/vaults';
import { useQuery } from '@redux-requests/react';
import { useMemo } from 'react';
import { WithdrawFormValues } from './Form';

interface RedeemTabProps {
  control: Control<WithdrawFormValues>;
  watch: (...args: any) => string;
  setValue: (...args: any) => void;
  trigger: (...args: any) => Promise<boolean>;
  errors: any;
  onOk: () => void;
}

export function RedeemTab({
  control,
  watch,
  setValue,
  trigger,
  errors,
  onOk,
}: RedeemTabProps): JSX.Element {
  const { classes: formClasses } = useFormStyles();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const withdrawAmountInputValue = new BigNumber(
    watch('withdrawAmount') || ZERO,
  );

  const { data: yieldConverterName } = useQuery({
    type: getYieldConverterName,
  });

  const { loading: ceTokenBalanceLoading, data: ceTokenBalance } = useQuery({
    type: getYieldConverterCeTokenBalance,
  });

  const { loading: aBNBcRatioLoading, data: aBNBcRatio } = useQuery({
    type: getaBNBcRatio,
  });

  const isBalanceReady = useMemo(
    () => ceTokenBalanceLoading || aBNBcRatioLoading,
    [ceTokenBalanceLoading, aBNBcRatioLoading],
  );

  const isSubmitDisabled = useMemo(
    () =>
      isBalanceReady ||
      !!errors.withdrawAmount ||
      withdrawAmountInputValue.isZero(),
    [isBalanceReady, errors.withdrawAmount, withdrawAmountInputValue],
  );

  return (
    <>
      <NumberField
        name="withdrawAmount"
        control={control}
        disabled={ceTokenBalanceLoading}
        balance={ceTokenBalance ?? ZERO}
        min={ZERO}
        variant="filled"
        label={t('vaults.withdraw.tokens-to-redeem')}
        error={!!errors.withdrawAmount}
        helperText={errors.withdrawAmount?.message}
        additionalLabel={tHTML('vaults.withdraw.balance-additional-label', {
          value: truncateNumber(ceTokenBalance ?? ZERO),
          unit: yieldConverterName,
        })}
        InputProps={{
          endAdornment: (
            <div className={formClasses.endAdornment}>
              <MaxButton
                disabled={isBalanceReady}
                onClick={async () => {
                  setValue(
                    'withdrawAmount',
                    truncateNumber(ceTokenBalance ?? ZERO, 18),
                  );
                  await trigger('withdrawAmount');
                }}
              />
            </div>
          ),
        }}
      />
      <div className={formClasses.descriptionBlock}>
        {!errors.withdrawAmount && (
          <div className={formClasses.descriptionBlockRow}>
            <div className={formClasses.descriptionBlockTitle}>
              <Typography variant="body2">
                {t('vaults.withdraw.you-will-receive')}
              </Typography>
              <Tooltip title={t('vaults.withdraw.you-will-receive-tooltip')} />
            </div>
            <Typography variant="body2">
              {t('units.aBNBc-value', {
                value: truncateNumber(
                  withdrawAmountInputValue.multipliedBy(aBNBcRatio ?? ZERO),
                ),
              })}
            </Typography>
          </div>
        )}
      </div>
      <Button
        className={formClasses.fullWidth}
        type="submit"
        disabled={isSubmitDisabled}
        onClick={onOk}
      >
        {t('vaults.withdraw.button', { unit: 'aBNBc' })}
      </Button>
    </>
  );
}
