import {
  useFormStyles,
  BackButton,
  FormBlock,
  useIsSMDown,
} from 'modules/common';
import { Link } from 'react-router-dom';
import { t } from 'modules/i18n';
import { FieldValues, useForm } from 'react-hook-form';
import { RedeemTab } from './RedeemTab';
import { VaultsRoutesConfig } from 'modules/vaults';

interface WithdrawFormProps {
  onSubmit?(formValues: WithdrawFormValues): void;
}

export interface WithdrawFormValues extends FieldValues {
  withdrawAmount: string;
}

export function Form({ onSubmit }: WithdrawFormProps): JSX.Element {
  const { classes: formClasses } = useFormStyles();

  const {
    control,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<WithdrawFormValues>({
    mode: 'onChange',
    defaultValues: {
      withdrawAmount: '',
    },
  });

  const isSMDown = useIsSMDown();

  return (
    <div className={formClasses.formRoot}>
      {!isSMDown && (
        <BackButton
          component={Link}
          to={VaultsRoutesConfig.dashboard.generatePath()}
        />
      )}
      <FormBlock
        title={t('vaults.withdraw.title', { unit: 'aBNBc' })}
        className={formClasses.mainBlock}
      >
        <RedeemTab
          control={control}
          watch={watch}
          setValue={setValue}
          trigger={trigger}
          errors={errors}
          onOk={handleSubmit(formValues => onSubmit && onSubmit(formValues))}
        />
      </FormBlock>
      {!isSMDown && <div className={formClasses.hiddenBlock} />}
    </div>
  );
}
