import React, { forwardRef } from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { SliderErrorClasses, useFormStyles } from 'modules/common';

interface Props<T extends FieldValues> extends SliderProps {
  name: Path<T>;
  control: Control<T>;
  format?: (value: number) => number | null;
  error?: boolean;
  placeholder?: string;
}

const DEFAULT_SLIDER_STEP = 1;

function SliderFieldComponent<T extends FieldValues>(
  { name, control, onChange, format, error, placeholder, ...rest }: Props<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const { classes: formClasses } = useFormStyles();

  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => {
    if (Array.isArray(value) || value === field.value) {
      return;
    }

    const formattedValue = format?.(value);
    if (formattedValue === null) {
      return;
    }

    if (onChange) {
      onChange(event, formattedValue ?? value, activeThumb);
    }

    field.onChange(formattedValue ?? value);
  };

  return (
    <div className={formClasses.fullWidth}>
      <Slider
        {...rest}
        ref={ref}
        step={DEFAULT_SLIDER_STEP}
        classes={error ?? !!errors[name] ? SliderErrorClasses : {}}
        onChange={handleChange}
      />
      {placeholder && (
        <Typography variant="subtitle1" align="right" sx={{ opacity: 0.5 }}>
          {placeholder}
        </Typography>
      )}
    </div>
  );
}

export const SliderField = forwardRef(SliderFieldComponent);
