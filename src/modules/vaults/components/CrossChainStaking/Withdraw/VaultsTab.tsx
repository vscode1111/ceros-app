/* eslint-disable @typescript-eslint/no-explicit-any */
import sikkaSVG from 'modules/common/assets/tokens/sikka.svg';
import abnbcSVG from 'modules/common/assets/tokens/abnbc.svg';
import bnbSVG from 'modules/common/assets/tokens/bnb.svg';
import BigNumber from 'bignumber.js';
import {
  MaxButton,
  NumberField,
  SliderField,
  ProgressBar,
  Tooltip,
  useFormStyles,
  ZERO,
  List,
  TokenListItem,
  SwitchField,
} from 'modules/common';
import { Button, Typography } from '@mui/material';
import { t, tHTML } from 'modules/i18n';
import { truncateNumber } from 'utils';
import { Control } from 'react-hook-form';
import {
  getYieldConverterCeTokenBalance,
  getYieldConverterName,
} from 'modules/vaults';
import { useQuery } from '@redux-requests/react';
import { useMemo } from 'react';
import { StatData, getProgressBarData } from '../../utils';
import { WithdrawFormValues } from './Form';

const STATS: StatData[] = [
  {
    value: 45,
    color: '#EFEA72',
    label: 'SIKKA',
    free: 50,
  },
  {
    value: 25,
    color: '#B3E0B7',
    label: 'aMATICc',
  },
  {
    value: 30,
    color: '#F5BCE9',
    label: 'aBNBc',
  },
];

interface VaultsTabProps {
  control: Control<WithdrawFormValues>;
  watch: (...args: any) => string;
  setValue: (...args: any) => void;
  trigger: (...args: any) => Promise<boolean>;
  errors: any;
  onOk: () => void;
}

export function VaultsTab({
  control,
  watch,
  setValue,
  trigger,
  errors,
  onOk,
}: VaultsTabProps): JSX.Element {
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

  const isBalanceReady = useMemo(
    () => ceTokenBalanceLoading,
    [ceTokenBalanceLoading],
  );

  const isSubmitDisabled = useMemo(
    () =>
      isBalanceReady ||
      !!errors.withdrawAmount ||
      withdrawAmountInputValue.isZero(),
    [isBalanceReady, errors.withdrawAmount, withdrawAmountInputValue],
  );

  const progressBarData = useMemo(() => getProgressBarData(STATS), []);

  const claimRewardValue = watch('claimReward');

  return (
    <>
      <ProgressBar height={20} data={progressBarData} gap={0.4} />
      <NumberField
        name="withdrawAmount"
        control={control}
        disabled={ceTokenBalanceLoading}
        balance={ceTokenBalance ?? ZERO}
        min={ZERO}
        variant="filled"
        label={t('vaults.withdraw.vault')}
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
      <div className={formClasses.fullWidth}>
        <SliderField
          name="percent"
          control={control}
          error={!!errors.percent}
          valueLabelDisplay="on"
          valueLabelFormat={value => t('units.percent', { value })}
        />
        <List>
          <div className={formClasses.descriptionBlockRow}>
            <div className={formClasses.descriptionBlockTitle}>
              <Typography
                variant="body2"
                color={claimRewardValue ? 'yellow' : 'gray'}
              >
                {t('vaults.withdraw.claim-reward')}
              </Typography>
              <Tooltip title={t('vaults.withdraw.you-will-receive-tooltip')} />
            </div>
            <SwitchField name="claimReward" control={control} />
          </div>
          <TokenListItem
            icon={sikkaSVG}
            title={t('vaults.withdraw.you-will-receive')}
            value="9.97 aMATICb"
          />
          <TokenListItem
            icon={abnbcSVG}
            title={t('vaults.withdraw.you-will-receive')}
            value="9.97 aMATICc"
          />
          <TokenListItem
            icon={bnbSVG}
            title={t('vaults.withdraw.you-will-receive')}
            value="9.97 MATIC"
          />
        </List>
      </div>
      <Button
        className={formClasses.fullWidth}
        type="submit"
        disabled={isSubmitDisabled}
        onClick={onOk}
      >
        {t('vaults.withdraw.remove-liquidity')}
      </Button>
    </>
  );
}
