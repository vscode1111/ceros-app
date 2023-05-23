import React, { ChangeEvent, forwardRef, useCallback } from 'react';
import BigNumber from 'bignumber.js';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { TextFieldInternal, TextFieldProps } from './TextFieldInternal';
import { useValidateNumber } from '../hooks';

interface NumberFieldComponentProps<T extends FieldValues>
  extends TextFieldProps {
  name: Path<T>;
  control: Control<T>;
  balance?: BigNumber;
  min?: BigNumber;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const regExp = /^(\d*\.{0,1}\d{0,18}$)/;

function NumberFieldComponent<T extends FieldValues>(
  {
    name,
    control,
    balance,
    onChange,
    min,
    ...rest
  }: NumberFieldComponentProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const validateAmount = useValidateNumber(balance, balance, min);
  const { field } = useController({
    name,
    control,
    rules: { validate: validateAmount },
  });

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { value } = event.target;

      if (regExp.exec(value)) {
        if (onChange) {
          onChange(event);
        }

        field.onChange(event);
      }
    },
    [field, onChange],
  );

  return (
    <TextFieldInternal
      {...rest}
      ref={ref}
      value={field.value}
      onChange={handleChange}
    />
  );
}

export const NumberField = forwardRef(NumberFieldComponent);
