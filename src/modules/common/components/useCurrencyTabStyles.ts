import { makeStyles } from 'tss-react/mui';

export const useCurrencyTabStyles = makeStyles()(() => ({
  root: {
    gap: '22px',
  },
  caption: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  tabs: {
    '& .MuiTabs-scroller': {
      height: 40,
    },
  },
  tab: {
    '&&': {
      fontSize: 14,
      minWidth: 40,
      height: 10,
      padding: 0,
    },
  },
}));
