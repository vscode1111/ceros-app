import { makeStyles } from 'tss-react/mui';

export const useSelectFieldStyles = makeStyles<{ open: boolean }>()(
  (theme, { open }) => ({
    root: {
      '&&': {
        borderBottomLeftRadius: open ? 0 : 16,
        borderBottomRightRadius: open ? 0 : 16,
        '&.Mui-focused': {
          borderColor: open ? theme.colors.yellow : theme.colors.white,
        },
        '&.MuiMenu-paper': {
          borderRadius: 16,
        },
      },
    },
  }),
);
