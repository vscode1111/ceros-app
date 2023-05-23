import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';
import { Box, Drawer, Modal } from '@mui/material';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import { useFormStyles, useIsMDDown, ZERO } from 'modules/common';
import { t } from 'modules/i18n';
import {
  getAccount,
  getaBNBcBalance,
  getNativeBalance,
  storeAuthModal,
} from 'store';
import { cropString } from 'utils';
import { DrawerContent } from './DrawerContent';
import { useAccountStyles } from './useAccountStyles';
import { ReactComponent as BnbSVG } from 'modules/common/assets/tokens/bnb.svg';
import { ReactComponent as MetamaskSVG } from 'modules/common/assets/metamask.svg';
import { ReactComponent as AngleDownSVG } from 'modules/common/assets/angle-down.svg';

interface Props {
  className?: string;
}

export function Account({ className }: Props): JSX.Element {
  const { classes, cx } = useAccountStyles();
  const { classes: formClasses } = useFormStyles();
  const dispatch = useDispatchRequest();
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const isMDDown = useIsMDDown();

  const { data: currentAccount } = useQuery({ type: getAccount });
  const { data: balance } = useQuery({ type: getNativeBalance });
  const { data: aBNBCBalance } = useQuery({ type: getaBNBcBalance });

  const drawerContent = useMemo(
    () => (
      <DrawerContent
        address={currentAccount ?? ''}
        balance={balance ?? ZERO}
        aBNBCBalance={aBNBCBalance ?? ZERO}
      />
    ),
    [aBNBCBalance, balance, currentAccount],
  );

  if (currentAccount) {
    return (
      <>
        <div className={cx(classes.root, className)}>
          {!isMDDown && balance && (
            <div className={classes.chain}>
              <BnbSVG className={classes.icon} />
              <Typography className={classes.typography} variant="h6">
                {t('header.account.bnb-chain')}
              </Typography>
            </div>
          )}
          <div
            className={classes.accountButton}
            onMouseDown={() =>
              isMDDown ? setShowDrawer(true) : setShowModal(true)
            }
          >
            <MetamaskSVG />
            <Typography className={classes.typography} variant="subtitle1">
              {cropString(currentAccount)}
            </Typography>
            <AngleDownSVG className={classes.angleDownSVG} />
          </div>
        </div>
        <Modal
          disableAutoFocus
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          <Box className={classes.modalContent}>{drawerContent}</Box>
        </Modal>
        <Drawer
          anchor="bottom"
          open={showDrawer}
          onClose={() => setShowDrawer(value => !value)}
          PaperProps={{
            style: {
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
            },
          }}
        >
          <div className={formClasses.traitContainer}>
            <div className={formClasses.trait} />
            {drawerContent}
          </div>
        </Drawer>
      </>
    );
  }

  return (
    <Button
      className={cx(formClasses.roundButton, className)}
      variant="contained"
      onClick={() => dispatch(storeAuthModal(true))}
    >
      {t('header.account.connect-wallet')}
    </Button>
  );
}
