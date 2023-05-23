import { makeStyles } from 'tss-react/mui';
import { TRANSITION } from 'modules/common';

const GRID_TEMPLATE_COLUMNS =
  'minmax(200px, 1.7fr) 0.9fr 0.9fr 0.8fr 0.8fr 0.8fr 0.6fr 0.6fr';
const GRID_TEMPLATE_COLUMNS_MD = '1fr 1fr 1fr 1fr';
const GRID_TEMPLATE_COLUMNS_SM = '1fr 1fr';

export const useVaultItemStyles = makeStyles<{ hasDeposit?: boolean }>()(
  (theme, { hasDeposit }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      color: hasDeposit ? theme.colors.black : theme.colors.white,
      backgroundColor: hasDeposit ? theme.colors.yellow : theme.colors.gray300,
      borderRadius: 16,
      padding: '34px 32px',
      [theme.breakpoints.down('md')]: {
        padding: '24px 20px',
        gap: '24px',
      },
      [theme.breakpoints.down('sm')]: {
        gap: '20px',
      },
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '24px',
      },
    },
    vaultContainer: {
      display: 'grid',
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: GRID_TEMPLATE_COLUMNS_MD,
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: GRID_TEMPLATE_COLUMNS_SM,
        gap: '22px',
      },
    },
    description: {
      display: 'flex',
      color: hasDeposit ? theme.colors.gray500 : theme.colors.gray,
      alignItems: 'center',
      gap: '8px',
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
    actionButton: {
      '&&': {
        color: theme.colors.black,
        border: `1px solid ${theme.colors.black}`,
        '&:hover': {
          color: theme.colors.black,
          border: `1px solid ${theme.colors.black}`,
          opacity: 0.5,
        },
      },
    },
    blackButton: {
      '&&': {
        color: theme.colors.white,
        backgroundColor: theme.colors.black,
        border: `1px solid ${theme.colors.black}`,
        '&:hover': {
          color: theme.colors.yellow,
          backgroundColor: theme.colors.black,
          border: `1px solid ${theme.colors.black}`,
          '& > svg': {
            transition: TRANSITION,
            color: theme.colors.yellow,
          },
        },
      },
    },
    mainButton: {
      '&&': {
        minWidth: 145,
      },
      '& > span': {
        display: 'flex',
        alignItems: 'center',
      },
      '& > svg': {
        marginRight: 12,
      },
      [theme.breakpoints.down('sm')]: {
        '&&': {
          minWidth: 60,
        },
        width: '100%',
      },
    },
    tooltipIcon: {
      color: hasDeposit ? theme.colors.gray500 : theme.colors.gray,
    },
  }),
);
