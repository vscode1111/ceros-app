import { makeStyles } from 'tss-react/mui';

export const useAddressList = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.colors.white,
    borderRadius: 16,
    width: '100%',
    marginTop: '12px',
  },
  itemWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    marginTop: '12px',
    backgroundColor: theme.colors.gray500,
    borderRadius: '16px',
  },
  closeIcon: {
    color: theme.colors.gray,
    '&:hover': {
      color: theme.colors.white,
    },
  },
}));
