import { Button, ButtonProps } from '@mui/material';
import { useActionButtonStyles } from './useActionButtonStyles';

export function ActionButton({
  children,
  className,
  ...rest
}: ButtonProps & { component?: unknown; to?: unknown }): JSX.Element {
  const { classes, cx } = useActionButtonStyles();
  return (
    <Button
      className={cx(classes.root, className)}
      variant="outlined"
      {...rest}
    >
      {children}
    </Button>
  );
}
