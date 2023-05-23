import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

import { Close } from './Close';

interface Props {
  children: ReactNode;
  title?: ReactNode;
  onClose?(): void;
}

export function Modal({ children, title, onClose }: Props): JSX.Element {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {title && (
          <Typography variant="h2" textAlign="center">
            {title}
          </Typography>
        )}
        {children}
        {onClose && <Close className={classes.close} onClose={onClose} />}
      </div>
    </div>
  );
}

const useStyles = makeStyles()(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray300,
    borderRadius: 36,
    width: '100%',
    minWidth: 550,
    maxWidth: 680,
    padding: 40,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
      minWidth: 0,
    },
  },
  close: {
    position: 'absolute',
    top: 28,
    right: 28,
  },
}));
