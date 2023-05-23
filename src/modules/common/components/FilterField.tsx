import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { forwardRef, useState } from 'react';
import { ReactComponent as AngleDownSVG } from '../assets/angle-down.svg';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { useFilterFieldStyles } from './useFilterFieldStyles';
import { MenuItemValue } from '../types/ui';

interface FilterFieldComponentProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  items: MenuItemValue[];
  smMaxHeight?: number;
}

export function FilterFieldComponent<T extends FieldValues>(
  {
    name,
    control,
    className,
    items,
    smMaxHeight = 300,
  }: FilterFieldComponentProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const [open, setOpen] = useState(false);
  const { classes, cx } = useFilterFieldStyles({ open, smMaxHeight });

  const { field } = useController({
    name,
    control,
  });

  return (
    <Select
      ref={ref}
      className={cx(classes.root, className)}
      variant="standard"
      IconComponent={AngleDownSVG}
      value={field.value}
      open={open}
      onChange={(event: SelectChangeEvent) => {
        const { value } = event.target;
        field.onChange(value);
      }}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      MenuProps={{
        PaperProps: {
          style: {
            transform: 'translate(0px, 6px)',
          },
          className: classes.paper,
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      }}
    >
      {items.map(row => (
        <MenuItem
          value={row.value}
          key={row.value}
          sx={{
            img: {
              width: 24,
              marginRight: '10px',
            },
          }}
        >
          {row.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export const FilterField = forwardRef(FilterFieldComponent);
