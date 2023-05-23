import { makeStyles } from 'tss-react/mui';

export const useTokenListItemStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    gap: '8px',
    fontSize: 14,
    fontWeight: 500,
  },
  icon: {
    width: 24,
    height: 24,
  },
  value: {
    fontSize: 14,
    fontWeight: 700,
  },
}));
