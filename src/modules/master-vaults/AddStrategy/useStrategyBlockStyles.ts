import { makeStyles } from 'tss-react/mui';

export const useStrategyBlockStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      gap: '20px',
    },
  },
}));
