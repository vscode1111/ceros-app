import { makeStyles } from 'tss-react/mui';

export const usePerfomanceBlockStyles = makeStyles<{ hasRewards: boolean }>()(
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
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        '&&': {
          fontSize: 20,
        },
      },
    },
    infoTable: {
      display: 'flex',
      backgroundColor: theme.colors.gray300,
      padding: '24px 10px',
      borderRadius: 16,
      color: theme.colors.gray,
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
    line: {
      width: '1px',
      borderLeft: `1px solid ${theme.colors.gray400}`,
      [theme.breakpoints.down('sm')]: {
        height: '1px',
        width: '100%',
        borderTop: `1px solid ${theme.colors.gray400}`,
      },
    },
    rewardsColumn: {
      color: hasRewards ? theme.colors.yellow : theme.colors.gray,
    },
  }),
);
