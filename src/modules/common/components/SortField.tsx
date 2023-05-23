import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useSortFieldStyles } from './useSortFieldStyles';
import { ReactString } from 'types';
import { ReactComponent as SortUpSVG } from '../assets/sort-up.svg';
import { SortType } from '../consts';

interface SortFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  label?: ReactString;
}

export function SortField<T extends FieldValues>({
  name,
  control,
  className,
  label,
}: SortFieldProps<T>): JSX.Element {
  const [value, setValue] = useState<SortType>(SortType.NONE);

  const { classes, cx } = useSortFieldStyles();

  const { field } = useController({
    name,
    control,
  });

  const hasValue = useMemo(() => value !== SortType.NONE, [value]);
  const checked = useMemo(() => value === SortType.ASC, [value]);

  return (
    <div
      className={cx(classes.root, className)}
      onMouseDown={() =>
        setValue(prev => {
          let currentValue;
          switch (prev) {
            case SortType.NONE:
              currentValue = SortType.ASC;
              break;
            case SortType.ASC:
              currentValue = SortType.DESC;
              break;
            case SortType.DESC:
              currentValue = SortType.NONE;
              break;
            default:
              currentValue = SortType.NONE;
              break;
          }
          field.onChange(currentValue);
          return currentValue;
        })
      }
    >
      {label && (
        <Typography variant="body2" color="gray">
          {label}
        </Typography>
      )}
      <div
        className={cx(
          classes.icon,
          checked && classes.checkedIcon,
          !hasValue && classes.noIcon,
        )}
      >
        <SortUpSVG />
      </div>
    </div>
  );
}
