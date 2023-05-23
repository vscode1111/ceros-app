import { makeStyles } from 'tss-react/mui';

export const useSortFilterTabStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    gap: '22px',
    height: 48,
  },
  caption: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    width: 60,
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
  noTab: {
    '&&': {
      display: 'none',
    },
  },
  tabTitle: {
    display: 'flex',
    gap: '15px',
    '& > svg': {
      marginRight: 5,
    },
  },
}));
