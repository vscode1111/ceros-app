import { ReactComponent as ArrowSVG } from './assets/arrow.svg';
import { Button, ButtonProps } from '@mui/material';
import { useBackButtonStyles } from './useBackButtonStyles';
import { t } from 'modules/i18n';

export function BackButton(
  props: ButtonProps & { component?: unknown; to?: unknown },
): JSX.Element {
  const { classes } = useBackButtonStyles();
  return (
    <Button className={classes.root} variant="outlined" {...props}>
      <ArrowSVG /> {t('common.back')}
    </Button>
  );
}
