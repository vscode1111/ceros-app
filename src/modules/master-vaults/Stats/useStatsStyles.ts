import { TRANSITION } from 'modules/common';
import { makeStyles } from 'tss-react/mui';

export const useStatsStyles = makeStyles<{ hasRewards: boolean }>()(
  (theme, { hasRewards }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        gap: '35px',
      },
      [theme.breakpoints.down('sm')]: {
        gap: '24px',
      },
    },
    headerTitle: {
      [theme.breakpoints.down('sm')]: {
        '&&': {
          fontSize: 20,
        },
      },
    },
    formRoot: {
      [theme.breakpoints.down('xl')]: {
        justifyContent: 'center',
      },
    },
    row: {
      display: 'flex',
      width: '100%',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 1fr',
      width: '100%',
      gap: '0 20px',
    },
    codeSnippetContainer: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 460,
      maxWidth: 680,
      height: 'fit-content',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        minWidth: 'unset',
        maxWidth: 'unset',
      },
    },
    codeSnippet: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    infoTable: {
      display: 'flex',
      backgroundColor: theme.colors.gray300,
      flexDirection: 'column',
      padding: 40,
      borderRadius: 16,
      color: theme.colors.gray,
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        marginTop: 30,
        backgroundColor: 'transparent',
      },
    },
    infoRow: {
      display: 'flex',
      marginBottom: 16,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('sm')]: {
        gap: '32px',
      },
    },
    line: {
      width: '1px',
      borderLeft: `1px solid ${theme.colors.gray400}`,
      [theme.breakpoints.down('sm')]: {
        height: '1px',
        width: '100%',
        borderTop: `1px solid ${theme.colors.gray400}`,
      },
    },
    infoItem: {
      width: '100%',
    },
    rewardsColumn: {
      color: hasRewards ? theme.colors.yellow : theme.colors.gray,
    },
    button: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      color: 'white',
      transform: 'translate(-50%,50%)',
    },
    whiteButton: {
      '&&': {
        fontSize: '14px',
        color: theme.colors.black,
        backgroundColor: theme.colors.white,
        fontWeight: 600,
        border: `1px solid ${theme.colors.white}`,
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
        minWidth: 192,
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
  }),
);
