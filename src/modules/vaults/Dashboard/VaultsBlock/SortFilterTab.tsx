import { useSortFilterTabStyles } from './useSortFilterTabStyles';
import { Tab, Tabs, Typography } from '@mui/material';
import { t } from 'modules/i18n';
import { useCallback } from 'react';
import { ReactComponent as AngleDownSVG } from 'modules/common/assets/sort-up.svg';
import { storeFilters, SortOption } from 'store';
import { useDispatchRequest, useQuery } from '@redux-requests/react';

interface SortFilterTabProps {
  className?: string;
}

export function SortFilterTab({ className }: SortFilterTabProps): JSX.Element {
  const { classes, cx } = useSortFilterTabStyles();

  const { data: filterParams } = useQuery({
    type: storeFilters,
  });

  const dispatch = useDispatchRequest();

  const handleTabClick = useCallback(
    (value: SortOption) => {
      let newValue = value;
      if (newValue === filterParams?.sort) {
        newValue = SortOption.DEFAULT;
      }
      void dispatch(storeFilters({ sort: newValue }));
    },
    [dispatch, filterParams],
  );

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.caption}>
        <Typography variant="h6">
          {t('vaults.vault-filters.sort-by')}
        </Typography>
      </div>
      <Tabs
        className={classes.tabs}
        value={filterParams?.sort ?? SortOption.DEFAULT}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab className={classes.noTab} value={SortOption.DEFAULT} />
        <Tab
          className={classes.tab}
          label={
            <div className={classes.tabTitle}>
              {t('vaults.vault-filters.tvl')}
              <AngleDownSVG />
            </div>
          }
          value={SortOption.TVL}
          onClick={() => handleTabClick(SortOption.TVL)}
        />
        <Tab
          className={classes.tab}
          label={
            <div className={classes.tabTitle}>
              {t('vaults.vault-filters.apy')}
              <AngleDownSVG />
            </div>
          }
          value={SortOption.APY}
          onClick={() => handleTabClick(SortOption.APY)}
        />
      </Tabs>
    </div>
  );
}
