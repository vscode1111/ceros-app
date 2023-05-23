import { makeStyles } from 'tss-react/mui';
import { CircularProgress } from '@mui/material';

export function LoadingOverlay(): JSX.Element {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={70} />
    </div>
  );
}

const useStyles = makeStyles()(() => ({
  root: {
    zIndex: 5000,
    display: 'flex',
    position: 'fixed',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
}));
