import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { t } from 'modules/i18n';
import { Modal } from './Modal/Modal';
import { TxHashLink } from './TxHashLink';
import { useIsSMDown } from 'modules/common';
import { BackButton } from './BackButton';
import { useFormStyles } from './useFormStyles';
import { Link } from 'react-router-dom';
import { VaultsRoutesConfig } from 'modules/vaults';

export enum CompletionModalAction {
  Provide,
  Withdraw,
  Borrow,
  Repay,
  DepositUSB,
  WithdrawUSB,
  Liquidate,
}

interface Props {
  title: string;
  deposited?: string;
  recipientAddress?: string;
  txHash?: string;
  children?: ReactNode;
  onOk(): void;
}

export function CompletedModal({
  title,
  deposited,
  recipientAddress,
  txHash,
  onOk,
  children,
}: Props): JSX.Element {
  const { classes: formClasses } = useFormStyles();
  const isSMDown = useIsSMDown();

  return (
    <div className={formClasses.formRoot}>
      {!isSMDown && (
        <BackButton
          component={Link}
          to={VaultsRoutesConfig.dashboard.generatePath()}
        />
      )}
      <Modal title={title} onClose={onOk}>
        <Box display="flex" flexDirection="column">
          <List
            sx={{
              mt: '44px',
              mb: '30px',
              '& > *:last-child': {
                borderBottom: 'none',
              },
            }}
          >
            {deposited && (
              <ListItem secondaryAction={deposited} divider>
                {t('modal.completed.deposited')}
              </ListItem>
            )}
            {recipientAddress && (
              <ListItem secondaryAction={recipientAddress} divider>
                {t('modal.completed.recipient-address')}
              </ListItem>
            )}
            {txHash && (
              <ListItem
                secondaryAction={<TxHashLink txHash={txHash} />}
                divider
              >
                {t('modal.completed.hash')}
              </ListItem>
            )}
          </List>
          <Box display="flex" flexDirection="column" sx={{ marginTop: 'auto' }}>
            <Button size="large" onClick={onOk}>
              {t('modal.completed.go-to-dashboard')}
            </Button>
            {children}
          </Box>
        </Box>
      </Modal>
      {!isSMDown && <div className={formClasses.hiddenBlock} />}
    </div>
  );
}
