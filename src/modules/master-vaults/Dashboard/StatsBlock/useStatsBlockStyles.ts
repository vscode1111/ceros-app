import { makeStyles } from 'tss-react/mui';

export const useStatsBlockStyles = makeStyles<{ hasRewards: boolean }>()(
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
    title: {
      [theme.breakpoints.down('sm')]: {
        '&&': {
          fontSize: 20,
        },
      },
    },
    infoTable: {
      display: 'flex',
      backgroundColor: theme.colors.gray300,
      flexDirection: 'column',
      padding: '48px 10px',
      borderRadius: 16,
      color: theme.colors.gray,
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        padding: '24px 0px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
      },
    },
    infoRow: {
      display: 'flex',
      marginBottom: 16,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
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
        width: '100%',
      },
    },
  }),
);
