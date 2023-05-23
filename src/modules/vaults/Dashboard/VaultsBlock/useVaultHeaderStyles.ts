import { makeStyles } from 'tss-react/mui';
import { GRID_TEMPLATE_COLUMNS, GRID_TEMPLATE_COLUMNS_MD } from './constants';

export const useVaultHeaderStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  vaultsContainer: {
    display: 'grid',
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
    padding: '0 32px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS_MD,
    },
  },
}));
