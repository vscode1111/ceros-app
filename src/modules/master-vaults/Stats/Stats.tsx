import contract from '../contract.sol';
import { BarChart } from './BarChart';
import { StatTableHeader } from './StatTableHeader';
import { StatList } from './StatList';
import { useStatsStyles } from './useStatsStyles';
import { t } from 'modules/i18n';
import { Button, Typography } from '@mui/material';
import { StatsBlock } from '../Dashboard/StatsBlock/StatsBlock';
import {
  CheckboxField,
  CodeSnippet,
  FormBlock,
  HUNDRED,
  MAX_INT,
  NumberField,
  TextField,
  useFormStyles,
  ZERO,
} from 'modules/common';
import { WhitelistAddress } from '../WhitelistAddress/WhitelistAddress';
import { TitleField } from '../VaultForm/TitleField';
import { useForm } from 'react-hook-form';
import { DepositFormValues } from '../CreateVault';
import { useEffect, useState } from 'react';

export function Stats(): JSX.Element {
  const { classes: formClasses } = useFormStyles();
  const { classes, cx } = useStatsStyles({ hasRewards: false });
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
      <StatsBlock enabledVaultCreation={false} />
      <div className={classes.infoTable}>
        <Typography variant="h4" className={classes.headerTitle}>
          {t('master-vaults.stats.title')}
        </Typography>
        <BarChart />
        <StatTableHeader />
        <StatList />
      </div>
      <div className={cx(formClasses.formRoot, classes.formRoot)}>
        <FormBlock className={formClasses.simpleMainBlock}>
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
                {t('master-vaults.form.update')}
              </Button>
            </div>
          </div>
        </FormBlock>
        <div
          className={cx(
            formClasses.simpleMainBlock,
            classes.codeSnippetContainer,
          )}
        >
          <TextField
            name="contractAddress"
            control={control}
            label={t('master-vaults.common.smart-contract-address')}
            variant="filled"
            placeholder={MAX_INT}
            error={!!errors.contractAddress}
            helperText={errors.contractAddress?.message}
          />
          <div className={classes.codeSnippet}>
            <Typography variant="body2">
              {t('master-vaults.common.smart-contract-code')}
            </Typography>
            <CodeSnippet text={code} />
          </div>
        </div>
      </div>
    </div>
  );
}
