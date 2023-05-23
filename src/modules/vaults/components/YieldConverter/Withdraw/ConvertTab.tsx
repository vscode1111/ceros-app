/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bignumber.js';
import {
  MaxButton,
  NumberField,
  Tooltip,
  TokenSelectField,
  useFormStyles,
} from 'components';
import { Typography, Box } from '@mui/material';
import { t, tHTML } from 'modules/i18n';
import { ZERO } from 'modules/common';
import { truncateNumber } from 'utils';
import { Control, FieldValues } from 'react-hook-form';

interface RedeemTabProps<T extends FieldValues> {
  control: Control<T>;
  errors: any;
}

export function ConvertTab<T extends FieldValues>({
  control,
  errors,
}: RedeemTabProps<T>): JSX.Element {
  const { classes: formClasses } = useFormStyles();
  return (
    <>
      <NumberField
        name="deposit"
        control={control}
        balance={new BigNumber(123)}
        min={ZERO}
        variant="filled"
        label={t('vaults.withdraw.tokens-to-redeem')}
        error={!!errors.deposit}
        helperText={errors.deposit?.message}
        additionalLabel={tHTML('vaults.withdraw.balance-additional-label', {
          value: truncateNumber(ZERO, 18),
          unit: t('units.BNB'),
        })}
        InputProps={{
          endAdornment: (
            <div className={formClasses.endAdornment}>
              <MaxButton />
            </div>
          ),
        }}
      />
      <Box display="flex" gap="20px" width="100%">
        <Box display="flex" gap="12px" flexDirection="column" width="100%">
          <Typography variant="body2" color="gray">
            {t('vaults.withdraw.you-will-received')}
          </Typography>
          <TokenSelectField
            className={formClasses.fullWidth}
            name="token"
            control={control as any}
          />
        </Box>
        <NumberField
          name="convert"
          control={control}
          balance={new BigNumber(123)}
          min={ZERO}
          variant="filled"
          label="BNB"
          error={!!errors.convert}
          helperText={errors.deposit?.message}
          additionalLabel={tHTML('vaults.withdraw.balance-additional-label', {
            value: truncateNumber(ZERO, 18),
            unit: t('units.BNB'),
          })}
          InputProps={{
            endAdornment: (
              <div className={formClasses.endAdornment}>
                <MaxButton />
              </div>
            ),
          }}
        />
      </Box>
      <div className={formClasses.descriptionBlock}>
        <div className={formClasses.descriptionBlockRow}>
          <div className={formClasses.descriptionBlockTitle}>
            <Typography variant="body2" color="gray">
              {t('vaults.withdraw.claim-yield', { unit: '27 aBNBc' })}
            </Typography>
            <Tooltip
              className={formClasses.halfOpacity}
              title={t('vaults.withdraw.claim-yield-tooltip')}
            />
          </div>
          <Typography variant="body2">5%</Typography>
        </div>
        <div className={formClasses.line} />
        <div className={formClasses.descriptionBlockRow}>
          <div className={formClasses.descriptionBlockTitle}>
            <Typography variant="body2">
              {t('vaults.withdraw.you-will-receive')}
            </Typography>
            <Tooltip title={t('vaults.withdraw.claim-yield-tooltip')} />
          </div>
          <Typography variant="body2">0.98 aBNBc</Typography>
        </div>
      </div>
    </>
  );
}
