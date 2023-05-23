import { makeStyles } from 'tss-react/mui';

export const useActionButtonStyles = makeStyles()(theme => ({
  root: {
    '&&': {
      display: 'flex',
      gap: 10,
      minWidth: 48,
      width: 48,
      height: 48,
      padding: 0,
      fontSize: 14,
      fontWeight: 700,
      '&:hover': {
        color: theme.colors.black,
        border: `1px solid ${theme.colors.black}`,
        '& > svg': {
          color: theme.colors.black,
        },
      },
    },
  },
}));
