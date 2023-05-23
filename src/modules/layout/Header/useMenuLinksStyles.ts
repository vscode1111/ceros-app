import { TRANSITION } from 'modules/common';
import { makeStyles } from 'tss-react/mui';

export const useMenuLinksStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      alignItems: 'initial',
      flexDirection: 'column',
      padding: '60px 60px 90px',
    },
  },
  linkContainer: {
    display: 'flex',
    gap: '32px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    textDecoration: 'none',
    transition: TRANSITION,
    '&, &:active:visited': {
      color: theme.colors.white,
    },
    '&.active, &:hover': {
      color: theme.colors.yellow,
    },
    '&:not(:last-child)': {
      marginRight: 41,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  networkList: {
    width: 32,
    height: 32,
  },
}));
