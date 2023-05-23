import { makeStyles } from 'tss-react/mui';
import { stepConnectorClasses } from '@mui/material';

export const useVaultFormStyles = makeStyles<{ isApproved: boolean }>()(
  (theme, { isApproved }) => {
    const endColor = isApproved ? theme.colors.yellow : theme.colors.gray500;
    return {
      root: {
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
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
      formContainer: {
        flex: 1,
      },
      codeSnippetContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '35%',
        height: 'fit-content',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          minWidth: 'unset',
          maxWidth: 'unset',
        },
      },
      codeSnippet: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '12px',
      },
      mainBlockWrapper: {
        gap: '40px',
        backgroundColor: theme.colors.gray300,
        borderRadius: 32,
        padding: '6px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          padding: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
        },
      },
      formRoot: {
        [theme.breakpoints.down('xl')]: {
          justifyContent: 'center',
        },
      },
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
        alignItems: 'flex-end',
      },
      approveButtonContent: {
        display: 'flex',
        gap: '6px',
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
