import { makeStyles } from 'tss-react/mui';

export const useFilters = makeStyles()(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
  },
  filters: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  filter: {
    width: '100%',
    maxWidth: 232,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  selectedFilter: {
    '&&': {
      color: theme.colors.white,
      border: `1px solid ${theme.colors.white}`,
      '& > svg': {
        color: theme.colors.white,
      },
    },
  },
  deposited: {
    marginLeft: 10,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: 15,
    },
  },
}));
