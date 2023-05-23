import { makeStyles } from 'tss-react/mui';

export const useLayoutStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    [theme.breakpoints.down('md')]: {
      left: 0,
      position: 'fixed',
      top: 0,
      width: '100vw',
    },
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: '1536px',
    margin: '0 auto',
    padding: '76px 64px 28px',
    [theme.breakpoints.down('md')]: {
      padding: '106px 32px 28px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '82px 20px 28px',
    },
  },
}));
