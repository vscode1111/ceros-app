/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bignumber.js';
import sikkaSVG from 'modules/common/assets/tokens/sikka.svg';
import abnbcSVG from 'modules/common/assets/tokens/abnbc.svg';
import bnbSVG from 'modules/common/assets/tokens/bnb.svg';
import {
  MaxButton,
  NumberField,
  ProgressBar,
  useFormStyles,
  ZERO,
  Warning,
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

  const claimRewardValue = watch('claimReward2');

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
      <ProgressBar height={20} data={progressBarData} gap={0.25} />
      <List>
        <TokenListItem
          icon={sikkaSVG}
          title="SIKKA (46%)"
          value="46.0832 SIKKA"
        />
        <TokenListItem
          icon={abnbcSVG}
          title="aBNBc (24%)"
          value="28,977.8722 aBNBc"
        />
        <TokenListItem icon={bnbSVG} title="BNB (34%)" value="1,872.9820 BNB" />
        <div className={formClasses.descriptionBlockRow}>
          <Typography
            variant="body2"
            color={claimRewardValue ? 'yellow' : 'gray'}
          >
            {t('vaults.claim.send-to-external-wallet')}
          </Typography>
          <SwitchField name="claimReward" control={control} />
        </div>
      </List>
      <Warning text={t('vaults.withdraw.all-other-tokens')} />
      <Button
        className={formClasses.fullWidth}
        type="submit"
        disabled={isSubmitDisabled}
        onClick={onOk}
      >
        {t('vaults.withdraw.redeem')}
      </Button>
    </>
  );
}
