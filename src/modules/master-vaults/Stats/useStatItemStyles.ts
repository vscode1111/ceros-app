import { makeStyles } from 'tss-react/mui';
import {
  GRID_TEMPLATE_COLUMNS,
  GRID_TEMPLATE_COLUMNS_MD,
  GRID_TEMPLATE_COLUMNS_SM,
} from './constants';

export const useStatItemStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    borderBottom: `1px solid ${theme.colors.gray400}`,
    '&:first-child': {
      borderTop: `1px solid ${theme.colors.gray400}`,
    },
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 28,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '24px',
    },
  },
  container: {
    display: 'grid',
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS_MD,
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS_SM,
    },
  },
  name: {
    [theme.breakpoints.down('sm')]: { gridArea: '1 / 1 / 2 / 3' },
  },
  allocationBarColumn: {
    [theme.breakpoints.down('sm')]: {
      gridArea: '2 / 1 / 3 / 4',
    },
  },
  allocationText: {
    minWidth: 40,
  },
  apy: {
    [theme.breakpoints.down('sm')]: {
      gridArea: '3 / 1 / 4 / 2',
    },
  },
  tvlColumn: {
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-end',
    },
  },
  tvl: {
    [theme.breakpoints.down('sm')]: {
      gridArea: '3 / 2 / 4 / 3',
    },
  },
  allocation: {
    [theme.breakpoints.down('sm')]: {
      gridArea: '3 / 3 / 4 / 4',
    },
  },
  description: {
    display: 'flex',
    color: theme.colors.gray,
    alignItems: 'center',
  },
  vaultColumn: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
  },
  actionColumn: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  tooltipIcon: {
    color: theme.colors.gray,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  square: {
    width: '16px',
    height: '16px',
    borderRadius: '3px',
    marginRight: '12px',
  },
  allocationWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  allocationBar: {
    backgroundColor: theme.colors.gray400,
    borderRadius: '8px',
    width: '113px',
    height: '20px',
    marginRight: '18px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  innerAllocationBar: {
    height: '20px',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
  },
}));
