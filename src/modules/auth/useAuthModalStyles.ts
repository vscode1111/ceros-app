import { makeStyles } from 'tss-react/mui';

export const useAuthModalStyles = makeStyles()(theme => ({
  root: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    transform: 'translate(calc(-50% - 0px), calc(-50% + 0px))',
    background: 'none',
    border: 'none',
    maxWidth: 680,
    backgroundColor: theme.colors.gray300,
    borderRadius: 36,
    width: 'calc(100% - 40px)',
    padding: '40px 80px',
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
    },
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    '&&': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
      },
    },
  },
  close: {
    position: 'absolute',
    top: 40,
    right: 40,
    color: theme.colors.gray,
    '&:hover': {
      color: theme.colors.yellow,
    },
    [theme.breakpoints.down('md')]: {
      top: 30,
      right: 24,
    },
  },
  wallets: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '26px 0px',
      width: 160,
      height: 140,
      gap: '20px',
      borderRadius: 32,
      cursor: 'pointer',
      border: `1px solid ${theme.colors.gray500}`,
      '&:hover': {
        backgroundColor: theme.colors.gray500,
      },
      [theme.breakpoints.down('sm')]: {
        width: 130,
        height: 140,
      },
    },
  },
  buttonTitle: {
    '&&': {
      fontWeight: 700,
    },
  },
  metamaskContainer: {
    height: 48,
    width: 48,
  },
  iconContainer: {
    height: 40,
    width: 40,
  },
}));
