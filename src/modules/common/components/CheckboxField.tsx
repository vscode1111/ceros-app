import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { ChangeEvent, forwardRef } from 'react';
import { useCheckboxFieldStyles } from './useCheckboxFieldStyles';
import { ReactString } from 'types';
import { ReactComponent as OkaySVG } from '../assets/okay.svg';

interface CheckboxFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  label?: ReactString;
}

export function CheckboxFieldComponent<T extends FieldValues>(
  { name, control, className, label }: CheckboxFieldProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
): JSX.Element {
  const { classes, cx } = useCheckboxFieldStyles();

  const { field } = useController({
    name,
    control,
  });

  return (
    <FormControlLabel
      className={cx(classes.root, className)}
      label={
        <Typography variant="h6" color="gray">
          {label}
        </Typography>
      }
      control={
        <Checkbox
          ref={ref}
          className={classes.checkbox}
          icon={<div className={classes.icon} />}
          checkedIcon={
            <div className={cx(classes.icon, classes.checkedIcon)}>
              <OkaySVG />
            </div>
          }
          checked={field.value}
          onChange={(_: ChangeEvent, checked: boolean) => {
            field.onChange(checked);
          }}
        />
      }
    />
  );
}

export const CheckboxField = forwardRef(CheckboxFieldComponent);
