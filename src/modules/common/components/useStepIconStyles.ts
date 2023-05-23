import { makeStyles } from 'tss-react/mui';

export const useStepIconStyles = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      width: 32,
      color: theme.colors.gray500,
      border: `2px solid ${theme.colors.gray500}`,
      borderRadius: '50%',
      fontSize: 14,
      fontWeight: 600,
    },
    rootActive: {
      color: theme.colors.black,
      backgroundColor: theme.colors.yellow,
      border: 'none',
    },
    rootCompleted: {
      backgroundColor: theme.colors.green,
      border: 'none',
    },
    icon: {
      color: theme.colors.dark,
    },
  };
});
