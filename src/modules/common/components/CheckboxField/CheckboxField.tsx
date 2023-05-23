import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import React, { ChangeEvent, forwardRef } from 'react';

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  label: string;
}

export function CheckboxComponent<T extends FieldValues>(
  { name, control, className, label }: CheckboxProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
): JSX.Element {
  const { field } = useController({
    name,
    control,
  });

  return (
    <FormControlLabel
      control={
        <Checkbox
          ref={ref}
          className={className}
          value={field.value}
          sx={{ marginRight: '4px' }}
          onChange={(_: ChangeEvent, checked: boolean) => {
            field.onChange(checked);
          }}
        />
      }
      label={label}
    />
  );
}

export const CheckboxField = forwardRef(CheckboxComponent);
