import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Modal } from 'modules/common';
import { t } from 'modules/i18n';
import { getChainIcon } from '../utils/getChainIcon';
import { EEthereumNetworkId } from '@ankr.com/provider';

interface IUnsupportedNetworkProps {
  currentChainId: EEthereumNetworkId;
  requiredChainId: EEthereumNetworkId;
  onSwitch: () => void;
}

export function UnsupportedNetwork({
  currentChainId,
  requiredChainId,
  onSwitch,
}: IUnsupportedNetworkProps): JSX.Element {
  return (
    <Modal title={t('wrong-network.title')}>
      <Box pt={3}>
        <Typography sx={{ marginBottom: 3 }} variant="body1" align="center">
          {t('wrong-network.subtitle', { value: t(`chain.${currentChainId}`) })}
        </Typography>
        <Typography sx={{ marginBottom: 4.5 }} variant="body1" align="center">
          {t('wrong-network.switch-to', {
            value: t(`chain.${currentChainId}`),
          })}
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
        <Box display="flex" justifyContent="center">
          <Button sx={{ maxWidth: 270 }} fullWidth onClick={onSwitch}>
            {t('wrong-network.submit')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
