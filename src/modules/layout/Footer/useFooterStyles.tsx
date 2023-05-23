import { makeStyles } from 'tss-react/mui';

export const useFooterStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    padding: '28px 64px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      padding: '28px 32px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '20px',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  version: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    fontSize: 14,
    color: theme.colors.gray500,
  },
}));
