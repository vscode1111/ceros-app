import { SyntheticEvent, useCallback } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { t, tHTML } from 'modules/i18n';
import { useCurrencyTabStyles } from './useCurrencyTabStyles';
import { Tooltip } from './Tooltip';
import { useFormStyles } from './useFormStyles';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import { storeCurrency, CurrencyOption } from 'store';

interface CurrencyTabProps {
  className?: string;
}

export function CurrencyTab({ className }: CurrencyTabProps): JSX.Element {
  const { classes, cx } = useCurrencyTabStyles();
  const { classes: formClasses } = useFormStyles();

  const { data: currency } = useQuery({
    type: storeCurrency,
  });

  const dispatch = useDispatchRequest();

  const handleTabChange = useCallback(
    (_: SyntheticEvent, newValue: CurrencyOption) => {
      void dispatch(storeCurrency(newValue));
    },
    [dispatch],
  );

  return (
    <div className={cx(formClasses.vaultsHeaderItem, classes.root, className)}>
      <div className={classes.caption}>
        <Typography variant="h6">
          {t('vaults.vault-header.currency-title')}
        </Typography>
        <Tooltip title={tHTML('vaults.vault-header.currency-tooltip')} />
      </div>
      <Tabs
        className={classes.tabs}
        value={currency ?? CurrencyOption.Token}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab
          className={classes.tab}
          label={t('units.USD')}
          value={CurrencyOption.USD}
        />
        <Tab
          className={classes.tab}
          label={t('vaults.vault-header.token')}
          value={CurrencyOption.Token}
        />
      </Tabs>
    </div>
  );
}
