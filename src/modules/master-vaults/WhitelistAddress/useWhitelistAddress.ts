import { makeStyles } from 'tss-react/mui';

export const useWhitelistAddress = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.colors.white,
    backgroundColor: theme.colors.gray400,
    borderRadius: 16,
    width: '100%',
    padding: '32px',
    [theme.breakpoints.down('md')]: {
      padding: '24px 20px',
      gap: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '20px',
    },
  },
  textFieldWrapper: {
    width: '100%',
  },
}));
