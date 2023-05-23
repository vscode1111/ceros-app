import Typography from '@mui/material/Typography';
import Modal, { ModalProps } from '@mui/material/Modal';
import { ReactComponent as MetamaskSVG } from 'modules/common/assets/metamask.svg';
import { ReactComponent as WalletConnectSVG } from './assets/wallet_connect.svg';
import { ReactComponent as TrustWalletSVG } from './assets/trust_wallet.svg';
import { ReactComponent as ImTokenSVG } from './assets/im_token.svg';
import { ReactComponent as MathWalletSVG } from './assets/math_wallet.svg';
import { ReactComponent as HuobiSVG } from './assets/huobi.svg';
import { ReactComponent as CloseSVG } from 'modules/common/assets/close.svg';
import { EWalletId } from '@ankr.com/provider';
import { useDispatchRequest } from '@redux-requests/react';
import { useAuthModalStyles } from './useAuthModalStyles';
import { t } from 'modules/i18n';
import { connect } from './actions/connect';
import { ReactString } from 'types';
import { useMemo } from 'react';

interface Wallet {
  title: string;
  icon: ReactString;
  walletId: EWalletId;
  isHidden: boolean;
}

interface Props extends Omit<ModalProps, 'children'> {
  onClose: () => void;
}

export function AuthModal(props: Props): JSX.Element {
  const { onClose } = props;
  const dispatch = useDispatchRequest();
  const { classes } = useAuthModalStyles();

  const availableWallets: Wallet[] = useMemo(
    () => [
      {
        title: 'MetaMask',
        icon: <MetamaskSVG className={classes.metamaskContainer} />,
        walletId: EWalletId.injected,
        isHidden: false,
      },
      {
        title: 'WalletConnect',
        icon: <WalletConnectSVG className={classes.iconContainer} />,
        walletId: EWalletId.walletconnect,
        isHidden: false,
      },
      {
        title: 'Trust Wallet',
        icon: <TrustWalletSVG className={classes.iconContainer} />,
        walletId: EWalletId.trust,
        isHidden: false,
      },
      {
        title: 'imToken',
        icon: <ImTokenSVG className={classes.iconContainer} />,
        walletId: EWalletId.imtoken,
        isHidden: false,
      },
      {
        title: 'Math Wallet',
        icon: <MathWalletSVG className={classes.iconContainer} />,
        walletId: EWalletId.math,
        isHidden: false,
      },
      {
        title: 'Huobi Wallet',
        icon: <HuobiSVG className={classes.iconContainer} />,
        walletId: EWalletId.huobi,
        isHidden: false,
      },
    ],
    [classes],
  );

  return (
    <Modal {...props}>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography
            className={classes.title}
            variant="h2"
            marginBottom="32px"
          >
            {t('auth.title')}
          </Typography>
          <CloseSVG className={classes.close} onClick={onClose} />
        </div>
        <div className={classes.wallets}>
          {availableWallets.map(({ title, icon, walletId, isHidden }) => {
            if (isHidden) {
              return null;
            }
            return (
              <div
                key={walletId}
                className={classes.button}
                onMouseDown={() => dispatch(connect(walletId))}
              >
                {icon}
                <Typography className={classes.buttonTitle} variant="h6">
                  {title}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
