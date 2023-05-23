import { makeStyles } from 'tss-react/mui';

export const useNetworkListStyles = makeStyles()(theme => ({
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  link: {
    display: 'flex',
    position: 'relative',
    order: 1,
    '& > svg': {
      color: theme.colors.gray,
    },
    '&:hover': {
      '& > svg': {
        color: theme.colors.yellow,
      },
    },
  },
}));
