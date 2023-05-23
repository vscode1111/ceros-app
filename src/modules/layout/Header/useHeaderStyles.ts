import { DESKTOP_HEADER_HEIGHT } from 'modules/common';
import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 8),
    position: 'relative',
    backgroundColor: theme.colors.dark,
    height: DESKTOP_HEADER_HEIGHT,
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      borderRadius: 0,
      padding: '0 32px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
    },
  },
  toggleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    [theme.breakpoints.down('sm')]: {
      gap: '0px',
    },
  },
  menu: {
    backgroundColor: theme.colors.gray300,
    height: '100vh',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '360px',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
      width: '100vw',
    },
  },
  menuToggleContainer: {
    display: 'flex',
    height: DESKTOP_HEADER_HEIGHT,
    padding: '12px 32px',
    [theme.breakpoints.down('sm')]: {
      padding: '12px 20px',
    },
  },
  link: {
    display: 'flex',
    position: 'relative',
    order: 1,
    [theme.breakpoints.down('sm')]: {
      height: 20,
    },
  },
  menuLinks: {
    order: 2,
  },
  menuButton: {
    justifyContent: 'flex-start',
  },
}));
