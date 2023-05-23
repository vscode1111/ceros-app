import { makeStyles } from 'tss-react/mui';

export const useFilterFieldStyles = makeStyles<{
  open: boolean;
  smMaxHeight?: number;
}>()((theme, { open, smMaxHeight }) => ({
  root: {
    '&&': {
      color: theme.colors.gray,
      backgroundColor: 'transparent',
      borderRadius: 200,
      '&.Mui-focused': {
        color: theme.colors.white,
        borderColor: open ? theme.colors.yellow : theme.colors.white,
        '& > svg': {
          color: theme.colors.white,
        },
      },
      '&.MuiMenu-paper': {
        borderRadius: 16,
      },
      '& > svg': {
        color: theme.colors.gray,
      },
    },
  },
  paper: {
    '&&': {
      borderRadius: 16,
      maxHeight: 300,
      border: `1px solid ${theme.colors.yellow}`,
      backgroundColor: theme.colors.dark,
      '.MuiMenuItem-root': {
        backgroundColor: theme.colors.dark,
        '&.Mui-selected': {
          backgroundColor: theme.colors.gray300,
        },
        '&:hover, &.Mui-focused': {
          backgroundColor: theme.colors.gray300,
        },
      },
      [theme.breakpoints.down('sm')]: {
        maxHeight: smMaxHeight,
      },
    },
  },
}));
