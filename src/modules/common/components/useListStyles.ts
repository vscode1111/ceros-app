import { makeStyles } from 'tss-react/mui';

export const useListStyles = makeStyles()(theme => ({
  root: {
    width: '100%',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.colors.gray500}`,
    },
  },
}));
