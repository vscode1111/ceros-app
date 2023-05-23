import packageJson from '../../../../package.json';
import { useFooterStyles } from './useFooterStyles';
import { t } from 'modules/i18n';
import { Typography } from '@mui/material';
import { NetworkList } from 'modules/common';

export function Footer(): JSX.Element {
  const { classes } = useFooterStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="h6" color="GrayText">
        {t('footer.all-rights')}
      </Typography>
      <div>
        <NetworkList />
        <div className={classes.version}>{packageJson.version}</div>
      </div>
    </footer>
  );
}
