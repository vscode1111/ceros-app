import { makeStyles } from 'tss-react/mui';

export const useVaultsBlockStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    [theme.breakpoints.down('md')]: {
      gap: '20px',
    },
  },
}));
