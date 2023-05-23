import BigNumber from 'bignumber.js';
import { ReactText, useCallback } from 'react';
import { ZERO } from 'modules/common';
import { t } from 'modules/i18n';
import { UseValidateResult } from './typings';

export const useValidateNumber = (
  balance = ZERO,
  max = balance,
  min = ZERO,
): UseValidateResult =>
  useCallback(
    (value?: ReactText) => {
      if (!value) {
        return t('validation.required');
      }

      const currentValue = new BigNumber(value);
      if (currentValue.isNaN()) {
        return t('validation.number-only');
      }

      if (currentValue.isLessThan(min)) {
        return t('validation.min', { value: min.toFormat() });
      }

      const isGreater = currentValue.isGreaterThan(max);
      const isZeroBalance = balance?.isEqualTo(0); // This validation must not know anything about business logic. TODO: remove
      if (isGreater || isZeroBalance) {
        return t('validation.max');
      }
    },
    [balance, max, min],
  );
