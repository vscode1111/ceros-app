import { makeStyles } from 'tss-react/mui';

export const useDrawerContentStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  addressSubContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address: {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      width: 32,
    },
  },
  typography: {
    marginLeft: 10,
    fontFeatureSettings: "'calt' off",
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    opacity: 0.5,
    '&, &:visited, &:active': {
      color: theme.colors.white,
    },
    '&:not(:last-child)': {
      marginRight: 18,
    },
    '& > span': {
      fontWeight: 400,
      fontSize: 13,
      marginLeft: 4,
    },
    '&:hover': {
      opacity: 1,
      color: theme.colors.yellow,
    },
  },
}));
