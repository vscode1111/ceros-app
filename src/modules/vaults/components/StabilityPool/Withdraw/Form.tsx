import {
  useFormStyles,
  BackButton,
  FormBlock,
  useIsSMDown,
  TabPanel,
} from 'modules/common';
import { Link } from 'react-router-dom';
import { t } from 'modules/i18n';
import { FieldValues, useForm } from 'react-hook-form';
import { SingleRedeemTab } from './SingleRedeemTab';
import { VaultsRoutesConfig } from 'modules/vaults';
import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { RedeemTab } from './RedeemTab';

enum TabOption {
  SingleRedeem = 'single-redeem',
  ComponentsRedeem = 'components-redeem',
}

interface WithdrawFormProps {
  onSubmit?(formValues: WithdrawFormValues): void;
}

export interface WithdrawFormValues extends FieldValues {
  withdrawAmount: string;
  claimReward: boolean;
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
      claimReward: true,
    },
  });

  const isSMDown = useIsSMDown();

  const [tab, setTab] = useState<TabOption>(TabOption.SingleRedeem);

  const handleTabChange = (event: SyntheticEvent, newValue: TabOption) => {
    setTab(newValue);
  };

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
        <Tabs
          className={formClasses.tabs}
          value={tab}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label={t('vaults.withdraw.redeem-to-single-token')}
            value={TabOption.SingleRedeem}
          />
          <Tab
            label={t('vaults.withdraw.redeem-to-its-components')}
            value={TabOption.ComponentsRedeem}
          />
        </Tabs>
        <TabPanel
          className={formClasses.tabPanel}
          index={TabOption.SingleRedeem}
          value={tab}
        >
          <SingleRedeemTab
            control={control}
            watch={watch}
            setValue={setValue}
            trigger={trigger}
            errors={errors}
            onOk={handleSubmit(formValues => onSubmit && onSubmit(formValues))}
          />
        </TabPanel>
        <TabPanel
          className={formClasses.tabPanel}
          index={TabOption.ComponentsRedeem}
          value={tab}
        >
          <RedeemTab
            control={control}
            watch={watch}
            setValue={setValue}
            trigger={trigger}
            errors={errors}
            onOk={handleSubmit(formValues => onSubmit && onSubmit(formValues))}
          />
        </TabPanel>
      </FormBlock>
      {!isSMDown && <div className={formClasses.hiddenBlock} />}
    </div>
  );
}
