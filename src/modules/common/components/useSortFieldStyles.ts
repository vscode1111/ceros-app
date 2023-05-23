import { makeStyles } from 'tss-react/mui';
import { TRANSITION } from '../consts';

export const useSortFieldStyles = makeStyles()(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
    },
    icon: {
      transition: TRANSITION,
      display: 'flex',
      justifyContent: 'center',
      color: theme.colors.white,
      alignItems: 'center',
      width: 24,
      height: 24,
    },
    noIcon: {
      '& > svg': {
        transition: TRANSITION,
        opacity: 0,
      },
    },
    checkedIcon: {
      transition: '0s',
      color: theme.colors.white,
      transform: 'rotate(180deg)',
    },
  };
});
