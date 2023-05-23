import { makeStyles } from 'tss-react/mui';
import { stepConnectorClasses } from '@mui/material';

export const useDepositFormStyles = makeStyles<{ isApproved: boolean }>()(
  (theme, { isApproved }) => {
    const endColor = isApproved ? theme.colors.yellow : theme.colors.gray500;
    return {
      approveButton: {
        '&&': {
          '&:disabled': {
            color: `${theme.colors.green}`,
          },
        },
      },
      balanceContainer: {
        display: 'flex',
        gap: '20px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
      approveButtonContent: {
        display: 'flex',
        gap: '6px',
      },
      stepper: {
        width: '55%',
        [theme.breakpoints.down('sm')]: {
          width: 32,
          marginRight: 16,
          height: '80%',
        },
        [`& .${stepConnectorClasses.line}`]: {
          border: 'none',
          height: 2,
          background: `linear-gradient(90deg, ${theme.colors.green}, ${endColor})`,
          [theme.breakpoints.down('sm')]: {
            width: 2,
            height: 29,
            background: `linear-gradient(180deg, ${theme.colors.green}, ${endColor})`,
          },
        },
      },
    };
  },
);
