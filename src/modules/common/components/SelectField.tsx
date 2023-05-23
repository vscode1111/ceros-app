import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { forwardRef, useState } from 'react';
import { ReactComponent as AngleDownSVG } from '../assets/angle-down.svg';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { useSelectFieldStyles } from './useSelectFieldStyles';
import { COLORS } from 'modules/common/consts';
import { MenuItemValue } from '../types/ui';

interface SelectFieldComponentProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  items: MenuItemValue[];
}

export function SelectFieldComponent<T extends FieldValues>(
  { name, control, className, items }: SelectFieldComponentProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const [value, setValue] = useState(items[0].value);
  const [open, setOpen] = useState(false);
  const { classes, cx } = useSelectFieldStyles({ open });

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
      value={value}
      open={open}
      onChange={(event: SelectChangeEvent) => {
        const { value } = event.target;
        setValue(value);
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
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            border: `1px solid ${COLORS.yellow}`,
            transform: 'translate(0px, -2px)',
          },
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

export const SelectField = forwardRef(SelectFieldComponent);
