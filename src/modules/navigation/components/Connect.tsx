import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { EEthereumNetworkId } from '@ankr.com/provider';
import { t } from 'modules/i18n';
import { getChainIcon } from 'modules/navigation/utils/getChainIcon';
import { Modal } from 'modules/common';
import { useDispatchRequest } from '@redux-requests/react';
import { storeAuthModal } from 'store';

interface IConnectProps {
  requiredChainId: EEthereumNetworkId;
}

export function Connect({ requiredChainId }: IConnectProps): JSX.Element {
  const dispatch = useDispatchRequest();
  return (
    <Modal title={t('connect.title')}>
      <Box pt={3}>
        <Typography align="center" component="div">
          {t('connect.subtitle')}
          <Box
            ml={1.5}
            mr={0.5}
            display="inline"
            sx={{ verticalAlign: 'middle' }}
          >
            {getChainIcon(requiredChainId)}
          </Box>
          {t(`chain.${requiredChainId}`)}
        </Typography>
        <Typography sx={{ marginBottom: 4.5 }} variant="body1" align="center" />
        <Box display="flex" justifyContent="center">
          <Button
            sx={{ maxWidth: 270 }}
            variant="contained"
            fullWidth
            onClick={() => dispatch(storeAuthModal(true))}
          >
            {t('connect.submit')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
