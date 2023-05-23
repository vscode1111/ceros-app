import { Button, ButtonProps } from '@mui/material';
import { useMaxButtonStyles } from './useMaxButtonStyles';
import { t } from 'modules/i18n';

export function MaxButton(props: ButtonProps): JSX.Element {
  const { classes } = useMaxButtonStyles();
  return (
    <Button className={classes.root} variant="outlined" size="small" {...props}>
      {t('common.max')}
    </Button>
  );
}
