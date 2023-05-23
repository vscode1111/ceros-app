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
import { VaultsRoutesConfig } from 'modules/vaults';
import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { VaultsTab } from './VaultsTab';
import { AmaticcTab } from './AmaticcTab';
import { MaticTab } from './MaticTab';
import { ReactComponent as VaultsSVG } from 'modules/common/assets/tokens/vaults.svg';
import { ReactComponent as AmaticcSVG } from 'modules/common/assets/tokens/amaticc.svg';
import { ReactComponent as MaticSVG } from 'modules/common/assets/tokens/matic.svg';
import { TabTitle } from './TabTitle';

enum TabOption {
  Vaults = 'vaults',
  aMATICc = 'amaticc',
  MATIC = 'matic',
}

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

  const [tab, setTab] = useState<TabOption>(TabOption.Vaults);

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
        title={t('vaults.withdraw.remove-liquidity', { unit: 'aBNBc' })}
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
            label={
              <TabTitle
                icon={<VaultsSVG />}
                title={t('vaults.withdraw.vault')}
              />
            }
            value={TabOption.Vaults}
          />
          <Tab
            label={
              <TabTitle icon={<AmaticcSVG />} title={t('units.aMATICc')} />
            }
            value={TabOption.aMATICc}
          />
          <Tab
            label={<TabTitle icon={<MaticSVG />} title={t('units.MATIC')} />}
            value={TabOption.MATIC}
          />
        </Tabs>
        <TabPanel
          className={formClasses.tabPanel}
          index={TabOption.Vaults}
          value={tab}
        >
          <VaultsTab
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
          index={TabOption.aMATICc}
          value={tab}
        >
          <AmaticcTab
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
          index={TabOption.MATIC}
          value={tab}
        >
          <MaticTab
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
