import { makeStyles } from 'tss-react/mui';

export const useDashboardStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '100px',
    [theme.breakpoints.down('md')]: {
      '&:last-child': {
        gap: '50px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:last-child': {
        gap: '75px',
      },
    },
  },
}));
