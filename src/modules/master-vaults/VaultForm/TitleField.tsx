import React, { ChangeEvent, forwardRef, useCallback } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { TextFieldInternal, TextFieldProps } from 'modules/common';

interface TextFieldComponentProps<T extends FieldValues>
  extends TextFieldProps {
  name: Path<T>;
  control: Control<T>;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

function TitleFieldComponent<T extends FieldValues>(
  { name, control, onChange, ...rest }: TextFieldComponentProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const { field } = useController({
    name,
    control,
  });

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }

      field.onChange(event);
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

export const TitleField = forwardRef(TitleFieldComponent);
