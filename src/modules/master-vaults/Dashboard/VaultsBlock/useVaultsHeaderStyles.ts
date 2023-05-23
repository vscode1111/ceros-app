import { makeStyles } from 'tss-react/mui';

const GRID_TEMPLATE_COLUMNS =
  'minmax(200px, 1.7fr) 0.9fr 0.9fr 0.8fr 0.8fr 0.8fr 0.6fr 0.6fr';
const GRID_TEMPLATE_COLUMNS_MD = '1fr 1fr 1fr 1fr';

export const useVaultsHeaderStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  currencyTab: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
    padding: '0 32px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS_MD,
    },
  },
}));
