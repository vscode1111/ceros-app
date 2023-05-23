import { makeStyles } from 'tss-react/mui';

export const useMaxButtonStyles = makeStyles()(theme => ({
  root: {
    '&&': {
      backgroundColor: theme.colors.gray500,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.colors.gray500,
      },
      width: 56,
    },
  },
}));
