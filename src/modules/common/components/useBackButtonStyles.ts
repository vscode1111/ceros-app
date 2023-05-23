import { makeStyles } from 'tss-react/mui';

export const useBackButtonStyles = makeStyles()(() => ({
  root: {
    '&&': {
      display: 'flex',
      gap: '10px',
      width: 113,
      height: 40,
      borderRadius: 65,
    },
  },
}));
