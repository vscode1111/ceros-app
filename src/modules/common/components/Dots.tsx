import { makeStyles } from 'tss-react/mui';

export function Dots(): JSX.Element {
  const { classes } = useStyles();

  return (
    <span className={classes.root}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
}

const useStyles = makeStyles()({
  root: {
    '& > span': {
      animationName: 'blink',
      animationDuration: '1.4s',
      animationIterationCount: 'infinite',
      animationFillMode: 'both',

      '&:nth-child(2)': {
        animationDelay: '.2s',
      },

      '&:nth-child(3)': {
        animationDelay: '.4s',
      },
    },

    '@keyframes blink': {
      '0%': {
        opacity: 0,
      },
      '20%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0.2,
      },
    },
  },
});
