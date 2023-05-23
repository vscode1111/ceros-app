import contract from './contract.sol';
import {
  NumberField,
  useFormStyles,
  FormBlock,
  ZERO,
  Modal,
  HUNDRED,
  TextField,
  CheckboxField,
  MAX_INT,
  CodeSnippet,
} from 'modules/common';
import { Button, Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { FieldValues, useForm } from 'react-hook-form';
import { useVaultFormStyles } from './useVaultFormStyles';
import { WhitelistAddress } from './WhitelistAddress/WhitelistAddress';
import { TitleField } from './VaultForm/TitleField';
import { useEffect, useState } from 'react';

export interface DepositFormValues extends FieldValues {
  vaultName: string;
  contractAddress: string;
  whiteListedAddress: string;
  whiteListed: boolean;
}

export function CreateVault(): JSX.Element {
  const { classes: formClasses } = useFormStyles();
  const { classes, cx } = useVaultFormStyles({ isApproved: true });
  const [code, setCode] = useState('');

  useEffect(() => {
    void fetch(contract)
      .then(r => r.text())
      .then(text => setCode(text));
  }, []);

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<DepositFormValues>({
    mode: 'onChange',
    defaultValues: {
      vaultName: '',
      contractAddress: '',
      whiteListedCheckbox: false,
      whiteListedAddress: '',
      depositFeeRecipient: '',
      withdrawFeeRecipient: '',
      depositFee: '',
      withdrawFee: '',
    },
  });

  const whiteAddressCheckbox = watch('whiteListedCheckbox');
  const whiteAdress = watch('whiteListedAddress');

  return (
    <div className={classes.root}>
      <Modal title="Create Yield Manager Vault">
        <div className={formClasses.formRoot}>
          <FormBlock className={classes.mainBlockWrapper}>
            <TitleField
              name="vaultName"
              control={control}
              variant="filled"
              label={t('master-vaults.table.header.vault-title')}
              placeholder={t('master-vaults.table.header.vault-title')}
              error={!!errors.vaultName}
              helperText={errors.vaultName?.message}
            />
            <TextField
              name="contractAddress"
              control={control}
              label={t('master-vaults.table.header.contract-address')}
              variant="filled"
              placeholder={MAX_INT}
              error={!!errors.contractAddress}
              helperText={errors.contractAddress?.message}
            />
            <div className={formClasses.line} />
            <div className={classes.row}>
              <div className={classes.gridContainer}>
                <NumberField
                  name="depositFee"
                  control={control}
                  disabled={false}
                  balance={HUNDRED}
                  min={ZERO}
                  variant="filled"
                  label={t('master-vaults.table.header.deposit')}
                  error={!!errors.depositFee}
                  helperText={errors.depositFee?.message}
                />
                <TextField
                  name="depositFeeRecipient"
                  control={control}
                  label={t('master-vaults.table.header.deposit-recipient')}
                  variant="filled"
                  placeholder={MAX_INT}
                  error={!!errors.depositFeeRecipient}
                  helperText={errors.depositFeeRecipient?.message}
                />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.gridContainer}>
                <NumberField
                  name="withdrawFee"
                  control={control}
                  disabled={false}
                  balance={HUNDRED}
                  min={ZERO}
                  variant="filled"
                  label={t('master-vaults.table.header.withdraw')}
                  error={!!errors.withdrawFee}
                  helperText={errors.withdrawFee?.message}
                />
                <TextField
                  name="withdrawFeeRecipient"
                  control={control}
                  label={t('master-vaults.table.header.withdraw-recipient')}
                  variant="filled"
                  placeholder={MAX_INT}
                  error={!!errors.withdrawFeeRecipient}
                  helperText={errors.withdrawFeeRecipient?.message}
                />
              </div>
            </div>
            <div className={formClasses.line} />
            <div className={classes.row}>
              <CheckboxField
                name="whiteListedCheckbox"
                control={control}
                label={t('master-vaults.table.header.whitelist')}
              />
            </div>
            {whiteAddressCheckbox && (
              <WhitelistAddress
                whiteAddress={whiteAdress}
                control={control}
                error={!!errors.whiteListedAddress}
                helperText={errors.whiteListedAddress?.message}
                name="whiteListedAddress"
              />
            )}

            <div className={formClasses.buttonContainer}>
              <div className={formClasses.buttonSubContainer}>
                <Button
                  className={formClasses.fullWidth}
                  type="submit"
                  disabled={false}
                >
                  {t('master-vaults.form.create')}
                </Button>
              </div>
            </div>
          </FormBlock>
        </div>
      </Modal>
      <div className={cx(formClasses.mainBlock, classes.codeSnippet)}>
        <Typography variant="body2">
          {t('master-vaults.create.smart-contract-code')}
        </Typography>
        <CodeSnippet text={code} />
      </div>
    </div>
  );
}
