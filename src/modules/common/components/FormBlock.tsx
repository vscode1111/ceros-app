import { Typography } from '@mui/material';
import { DOMAttributes } from 'react';
import { makeStyles } from 'tss-react/mui';

interface MainBlockProps extends DOMAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
}

export function FormBlock({
  title,
  children,
  className,
  ...rest
}: MainBlockProps): JSX.Element {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)} {...rest}>
      {title && <Typography variant="h2">{title}</Typography>}
      {children}
    </div>
  );
}

const useStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.colors.gray300,
    borderRadius: 32,
    padding: 40,
    width: 680,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
