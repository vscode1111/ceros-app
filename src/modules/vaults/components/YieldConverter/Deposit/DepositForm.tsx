/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bignumber.js';
import {
  MaxButton,
  BackButton,
  NumberField,
  useFormStyles,
  Tooltip,
  StepIcon,
  FormBlock,
  useIsSMDown,
  useLoadingOverlay,
  ZERO,
} from 'modules/common';
import { Link } from 'react-router-dom';
import { VaultsRoutesConfig } from '../../..';
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { t, tHTML } from 'modules/i18n';
import { FieldValues, useForm } from 'react-hook-form';
import { truncateNumber } from 'utils';
import { aBNBсApprove, getaBNBcBalance } from 'store';
import { getYieldConverterApprovedAmount } from '../../../actions/YieldConverter/getYieldConverterApprovedAmount';
import { useQuery } from '@redux-requests/react';
import { useMemo } from 'react';
import { ReactComponent as OkaySVG } from 'modules/common/assets/okay.svg';
import { useDepositFormStyles } from './useDepositFormStyles';
import { useApproveAmount } from 'modules/api';

interface Props {
  onSubmit: (values: DepositFormValues) => void;
}

export interface DepositFormValues extends FieldValues {
  depositAmount: string;
}

export function DepositForm({ onSubmit }: Props): JSX.Element {
  const { classes: formClasses, cx } = useFormStyles();

  const {
    control,
    setValue,
    trigger,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<DepositFormValues>({
    mode: 'onChange',
    defaultValues: {
      depositAmount: '',
    },
  });

  const { loading: aBNBcLoading, data: aBNBcBalance } = useQuery({
    type: getaBNBcBalance,
  });

  const {
    approvedAmount,
    approve,
    loading: approveLoading,
  } = useApproveAmount(aBNBсApprove, getYieldConverterApprovedAmount);

  useLoadingOverlay(approveLoading);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const depositAmountInputValue = new BigNumber(watch('depositAmount') || ZERO);

  const isApproved = useMemo(
    () => depositAmountInputValue.isLessThanOrEqualTo(approvedAmount),
    [depositAmountInputValue, approvedAmount],
  );

  const { classes } = useDepositFormStyles({ isApproved });

  const isApproveDisabled = useMemo(
    () =>
      aBNBcLoading ||
      approveLoading ||
      !!errors.depositAmount ||
      depositAmountInputValue.isZero() ||
      isApproved,
    [
      aBNBcLoading,
      approveLoading,
      errors.depositAmount,
      depositAmountInputValue,
      isApproved,
    ],
  );

  const isSubmitDisabled = useMemo(
    () =>
      aBNBcLoading ||
      approveLoading ||
      !!errors.depositAmount ||
      depositAmountInputValue.isZero() ||
      !isApproved,
    [
      aBNBcLoading,
      approveLoading,
      errors.depositAmount,
      depositAmountInputValue,
      isApproved,
    ],
  );

  const isSMDown = useIsSMDown();

  return (
    <div className={formClasses.formRoot}>
      {!isSMDown && (
        <BackButton
          component={Link}
          to={VaultsRoutesConfig.dashboard.generatePath()}
        />
      )}
      <FormBlock
        title={t('vaults.deposit.title', { unit: 'aBNBc' })}
        className={formClasses.mainBlock}
      >
        <NumberField
          name="depositAmount"
          control={control}
          disabled={aBNBcLoading}
          balance={aBNBcBalance ?? ZERO}
          min={ZERO}
          variant="filled"
          label={t('vaults.deposit.amount', { unit: t('units.aBNBc') })}
          error={!!errors.depositAmount}
          helperText={errors.depositAmount?.message}
          additionalLabel={tHTML('vaults.deposit.balance-additional-label', {
            value: truncateNumber(aBNBcBalance ?? ZERO),
            unit: t('units.aBNBc'),
          })}
          InputProps={{
            endAdornment: (
              <div className={formClasses.endAdornment}>
                <MaxButton
                  disabled={aBNBcLoading}
                  onClick={async () => {
                    setValue(
                      'depositAmount',
                      truncateNumber(aBNBcBalance ?? ZERO, 18),
                    );
                    await trigger('depositAmount');
                  }}
                />
              </div>
            ),
          }}
        />
        <div className={formClasses.descriptionBlock}>
          <div className={formClasses.descriptionBlockRow}>
            <Box display="flex" alignItems="center" gap="12px">
              <Typography variant="body2" color="gray">
                {t('vaults.deposit.reward-fee')}
              </Typography>
              <Tooltip
                className={formClasses.halfOpacity}
                title={t('vaults.deposit.reward-fee-tooltip')}
              />
            </Box>
            <Typography variant="body2">0%</Typography>
          </div>
          {!errors.depositAmount && (
            <>
              <div className={formClasses.line} />
              <div className={formClasses.descriptionBlockRow}>
                <Typography variant="body2">
                  {t('vaults.deposit.you-will-deposit')}
                </Typography>
                <Typography variant="body2">
                  {t('units.aBNBc-value', {
                    value: truncateNumber(depositAmountInputValue),
                  })}
                </Typography>
              </div>
            </>
          )}
        </div>
        <div className={formClasses.buttonContainer}>
          <div className={formClasses.buttonSubContainer}>
            <Button
              className={cx(formClasses.fullWidth, classes.approveButton)}
              variant="outlined"
              type="submit"
              disabled={isApproveDisabled}
              onClick={handleSubmit((formValues: DepositFormValues) => {
                void approve(new BigNumber(formValues.depositAmount));
              })}
            >
              <div className={classes.approveButtonContent}>
                {isApproved && <OkaySVG />}
                {t('vaults.deposit.approve')}
              </div>
            </Button>
            <Button
              className={formClasses.fullWidth}
              type="submit"
              disabled={isSubmitDisabled}
              onClick={handleSubmit((formValues: DepositFormValues) => {
                void onSubmit(formValues);
              })}
            >
              {t('vaults.deposit.button', { unit: 'cerosaBNBc' })}
            </Button>
          </div>
          <Stepper
            className={classes.stepper}
            activeStep={isApproved ? 1 : 0}
            orientation={isSMDown ? 'vertical' : 'horizontal'}
          >
            <Step>
              <StepLabel StepIconComponent={StepIcon} />
            </Step>
            <Step>
              <StepLabel StepIconComponent={StepIcon} />
            </Step>
          </Stepper>
        </div>
      </FormBlock>
      {!isSMDown && <div className={formClasses.hiddenBlock} />}
    </div>
  );
}
