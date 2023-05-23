import { makeStyles } from 'tss-react/mui';

export const useAccountStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  typography: {
    marginLeft: 8,
    fontFeatureSettings: "'calt' off",
  },
  chain: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '0 12px',
    '& > img': {
      width: 24,
    },
  },
  icon: {
    width: 24,
    height: 24,
  },
  accountButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 20,
    height: 40,
    padding: '0 20px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: theme.colors.yellow,
      '& > svg': {
        color: theme.colors.yellow,
      },
    },
  },
  angleDownSVG: {
    color: theme.colors.gray,
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 680,
    backgroundColor: theme.colors.gray300,
    padding: '40px 80px',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    boxShadow: 24 as any,
    borderRadius: 32,
  },
}));
