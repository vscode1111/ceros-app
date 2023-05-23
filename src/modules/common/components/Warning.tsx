import { Typography } from '@mui/material';
import { ReactComponent as ExclamationSVG } from './assets/exclamation.svg';
import { useWarningStyles } from './useWarningStyles';

interface WarningProps {
  text: string;
}

export function Warning({ text }: WarningProps): JSX.Element {
  const { classes } = useWarningStyles();
  return (
    <div className={classes.root}>
      <ExclamationSVG className={classes.icon} />
      <Typography variant="body2" color="yellow">
        {text}
      </Typography>
    </div>
  );
}
