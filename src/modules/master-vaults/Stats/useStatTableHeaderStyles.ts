import { makeStyles } from 'tss-react/mui';
import { GRID_TEMPLATE_COLUMNS } from './constants';

export const useStatTableHeaderStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
  currencyTab: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  vaultsContainer: {
    display: 'grid',
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));
