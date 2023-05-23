import { makeStyles } from 'tss-react/mui';

export const useWarningStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    width: '100%',
    gap: '14px',
  },
  icon: {
    marginTop: 4,
  },
}));
