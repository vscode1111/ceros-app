import { makeStyles } from 'tss-react/mui';

export const useCheckboxFieldStyles = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      '&:hover': {
        '& > span > div': {
          border: `1px solid ${theme.colors.yellow}`,
        },
      },
    },
    checkbox: {
      width: 24,
      height: 24,
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      backgroundColor: theme.colors.gray300,
      border: `1px solid ${theme.colors.gray500}`,
      borderRadius: 6,
    },
    checkedIcon: {
      color: theme.colors.yellow,
      border: `1px solid ${theme.colors.yellow}`,
    },
  };
});
