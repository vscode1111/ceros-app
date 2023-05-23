import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Switch } from '@mui/material';
import { ChangeEvent, forwardRef } from 'react';

interface SwitchFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
}

export function SwitchFieldComponent<T extends FieldValues>(
  { name, control, className }: SwitchFieldProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
): JSX.Element {
  const { field } = useController({
    name,
    control,
  });

  return (
    <Switch
      ref={ref}
      className={className}
      checked={field.value}
      onChange={(_: ChangeEvent, checked: boolean) => {
        field.onChange(checked);
      }}
    />
  );
}

export const SwitchField = forwardRef(SwitchFieldComponent);
