import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import BigNumber from 'bignumber.js';
import { BSD_SCAN_URL, useFormStyles } from 'modules/common';
import { t } from 'modules/i18n';
import { cropString } from 'utils';
import { ReactComponent as CopySVG } from './assets/copy.svg';
import { ReactComponent as ShareSVG } from './assets/share.svg';
import { useDrawerContentStyles } from './useDrawerContentStyles';
import { Button } from '@mui/material';
import { useDispatchRequest } from '@redux-requests/react';
import { disconnect } from 'modules/auth';
import { ReactComponent as MetamaskSVG } from 'modules/common/assets/metamask.svg';

interface Props {
  address: string;
  balance: BigNumber;
  aBNBCBalance: BigNumber;
}

export function DrawerContent({
  address,
  balance,
  aBNBCBalance,
}: Props): JSX.Element {
  const { classes } = useDrawerContentStyles();
  const { classes: formClasses } = useFormStyles();
  const dispatch = useDispatchRequest();

  return (
    <div className={classes.root}>
      <div className={classes.addressContainer}>
        <div className={classes.addressSubContainer}>
          <div className={classes.address}>
            <MetamaskSVG />
            <Typography className={classes.typography} variant="h5">
              {cropString(address)}
            </Typography>
          </div>
          <Button
            className={formClasses.roundButton}
            variant="contained"
            onClick={() => {
              void dispatch(disconnect());
            }}
          >
            {t('header.account.disconnect')}
          </Button>
        </div>
        <Box display="flex" mb={3.5}>
          <div className={classes.link}>
            <CopySVG />
            <span>{t('header.account.copy-address')}</span>
          </div>
          <a
            className={classes.link}
            href={`${BSD_SCAN_URL}/address/${address}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ShareSVG />
            <span>{t('header.account.open-explorer')}</span>
          </a>
        </Box>
      </div>
      <List>
        <ListItem secondaryAction={balance.decimalPlaces(3).toString()} divider>
          {t('units.BNB')}
        </ListItem>
        <ListItem secondaryAction={aBNBCBalance.toString()}>
          {t('units.aBNBc')}
        </ListItem>
      </List>
    </div>
  );
}
