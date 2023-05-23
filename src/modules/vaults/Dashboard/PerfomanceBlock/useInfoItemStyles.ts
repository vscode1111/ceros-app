import { makeStyles } from 'tss-react/mui';

export const useInfoItemStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 40px',
    gap: '22px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      gap: '20px',
    },
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  title: {
    [theme.breakpoints.down('md')]: {
      '&&': {
        fontSize: 14,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&&': {
        fontSize: 18,
      },
    },
  },
  valuesWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '14px',
  },
  values: {
    [theme.breakpoints.down('md')]: {
      '&&': {
        fontSize: 24,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&&': {
        fontSize: 20,
      },
    },
  },
}));
