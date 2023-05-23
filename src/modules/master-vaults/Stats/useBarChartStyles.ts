import { makeStyles } from 'tss-react/mui';

export const useBarChartStyles = makeStyles()(() => ({
  multicolorBar: { margin: '40px 0' },
  bars: {
    display: 'flex',
  },
  bar: {
    float: 'left',
    height: '20px',
    '&:first-of-type': {
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
    },
    '&:last-of-type': {
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    },
    '&:not(:last-child)': {
      marginRight: '2px',
    },
  },
}));
