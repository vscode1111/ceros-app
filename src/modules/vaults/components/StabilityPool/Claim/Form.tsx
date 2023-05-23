import {
  useFormStyles,
  BackButton,
  FormBlock,
  useIsSMDown,
  Tooltip,
  SwitchField,
  TextField,
} from 'modules/common';
import { Link } from 'react-router-dom';
import { t } from 'modules/i18n';
import { FieldValues, useForm } from 'react-hook-form';
import { VaultsRoutesConfig, getYieldConverterYield } from 'modules/vaults';
import { Button, Typography } from '@mui/material';
import { printLoadingNumber } from 'utils';
import { useEffect, useMemo } from 'react';
import { useDispatchRequest, useQuery } from '@redux-requests/react';

interface ClaimFormProps {
  onSubmit?(formValues: ClaimFormValues): void;
}

export type ClaimFormValues = FieldValues;

export function Form({ onSubmit }: ClaimFormProps): JSX.Element {
  const { classes: formClasses } = useFormStyles();

  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<ClaimFormValues>({
    mode: 'onChange',
    defaultValues: {
      address: '',
    },
  });

  const isSMDown = useIsSMDown();

  const dispatch = useDispatchRequest();

  useEffect(() => {
    void dispatch(getYieldConverterYield());
  }, [dispatch]);

  const { loading: yieldConvertYeildLoading, data: yieldConverterYield } =
    useQuery({
      type: getYieldConverterYield,
    });

  const externalWalletValue = watch('externalWallet');

  const isSubmitDisabled = useMemo(
    () => externalWalletValue && !!errors.address,
    [externalWalletValue, errors.address],
  );

  return (
    <div className={formClasses.formRoot}>
      {!isSMDown && (
        <BackButton
          component={Link}
          to={VaultsRoutesConfig.dashboard.generatePath()}
        />
      )}
      <FormBlock
        title={t('vaults.claim.title')}
        className={formClasses.mainBlock}
      >
        <div className={formClasses.descriptionBlockRow}>
          <div className={formClasses.descriptionBlockTitle}>
            <Typography variant="body2">
              {t('vaults.claim.you-will-receive')}
            </Typography>
            <Tooltip title={t('vaults.claim.you-will-receive-tooltip')} />
          </div>
          <Typography variant="body2">
            {printLoadingNumber(
              yieldConvertYeildLoading,
              yieldConverterYield,
              ' ',
              t('units.aBNBc'),
            )}
          </Typography>
        </div>
        <div className={formClasses.descriptionBlock}>
          <div className={formClasses.descriptionBlockRow}>
            <Typography
              variant="body2"
              color={externalWalletValue ? 'yellow' : 'gray'}
            >
              {t('vaults.claim.send-to-external-wallet')}
            </Typography>
            <SwitchField name="externalWallet" control={control} />
          </div>
          {externalWalletValue && (
            <TextField
              name="address"
              placeholder="0xf9ded7c10677f108e6818bd18c9a8421f09d2b28"
              control={control}
              variant="filled"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        </div>
        <Button
          className={formClasses.fullWidth}
          type="submit"
          disabled={isSubmitDisabled}
          onClick={handleSubmit(formValues => onSubmit && onSubmit(formValues))}
        >
          {t('vaults.claim.button', { unit: 'SIKKA' })}
        </Button>
      </FormBlock>
      {!isSMDown && <div className={formClasses.hiddenBlock} />}
    </div>
  );
}
