import {
  useFormStyles,
  BackButton,
  FormBlock,
  useIsSMDown,
  Tooltip,
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

  const { handleSubmit } = useForm<ClaimFormValues>({
    mode: 'onChange',
    defaultValues: {
      deposit: 0,
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

  const isSubmitDisabled = useMemo(() => false, []);

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
        <div className={formClasses.descriptionBlock}>
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
        </div>
        <Button
          className={formClasses.fullWidth}
          type="submit"
          disabled={isSubmitDisabled}
          onClick={handleSubmit(formValues => onSubmit && onSubmit(formValues))}
        >
          {t('vaults.claim.button', { unit: 'aBNBc' })}
        </Button>
      </FormBlock>
      {!isSMDown && <div className={formClasses.hiddenBlock} />}
    </div>
  );
}
