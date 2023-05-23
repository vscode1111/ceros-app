import { useVaultItemStyles } from './useVaultItemStyles';
import { Typography, Button } from '@mui/material';
import { t } from 'modules/i18n';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  ActionButton,
  useIsMDDown,
  ZERO,
  ColumnItem,
} from 'modules/common';
import { useQuery } from '@redux-requests/react';
import { storeCurrency, CurrencyOption, getaBNBcPrice } from 'store';
import { Vault, VaultsRoutesConfig } from 'modules/vaults';
import { printLoadingNumber } from 'utils';
import { ReactComponent as ClaimSVG } from '../../assets/claim.svg';
import { useMemo } from 'react';
import { ReactComponent as PlusSVG } from '../../assets/plus.svg';
import { ReactComponent as MinusSVG } from '../../assets/minus.svg';
import { getVaultAssetConfig } from '../../hooks/constants';

interface VaultsItemProps {
  item: Vault;
}

export function VaultItem({ item }: VaultsItemProps): JSX.Element {
  const { data: currency } = useQuery({
    type: storeCurrency,
  });

  const { data: aBNBcPrice } = useQuery({
    type: getaBNBcPrice,
  });

  const isUSD = useMemo(() => currency === CurrencyOption.USD, [currency]);

  const { loading: apyLoading, data: apyData } = useQuery({
    type: item.apyAction,
  });

  const { loading: tvlLoading, data: tvlData } = useQuery({
    type: item.tvlAction,
  });

  const { loading: depositLoading, data: depositData } = useQuery({
    type: item.depositAction,
  });

  const { loading: yeildLoading, data: yieldData } = useQuery({
    type: item.yieldAction,
  });

  const isMDDown = useIsMDDown();

  const hasDeposit = useMemo(() => depositData?.gt(ZERO), [depositData]);

  const { classes, cx } = useVaultItemStyles({ hasDeposit });

  const nameColumn = useMemo(() => {
    const assetConfig = getVaultAssetConfig(item.asset);
    const icon =
      assetConfig &&
      (!hasDeposit || !assetConfig.depositedIcon
        ? assetConfig.normalIcon
        : assetConfig.depositedIcon);
    return (
      <div className={classes.vaultColumn}>
        {icon}
        <ColumnItem
          value={<Typography variant="h4">{t(item.title)}</Typography>}
          description={
            <div className={classes.description}>
              <Typography variant="body2">{t(item.description)}</Typography>
              <Tooltip
                iconClassName={classes.tooltipIcon}
                title={t(item.descriptionTooltip)}
              />
            </div>
          }
          gap="4px"
        />
      </div>
    );
  }, [hasDeposit, classes, item]);

  const actionColumn = useMemo(
    () => (
      <div className={classes.actionColumn}>
        {hasDeposit ? (
          <>
            <ActionButton
              className={classes.actionButton}
              component={Link}
              to={VaultsRoutesConfig.deposit.generatePath(item.id)}
            >
              <PlusSVG />
            </ActionButton>
            <ActionButton
              className={classes.actionButton}
              component={Link}
              to={VaultsRoutesConfig.withdraw.generatePath(item.id)}
            >
              <MinusSVG />
            </ActionButton>
            <Button
              className={cx(classes.blackButton, classes.mainButton)}
              variant="outlined"
              component={Link}
              to={VaultsRoutesConfig.claim.generatePath(item.id)}
            >
              <ClaimSVG />
              {t('common.claim')}
            </Button>
          </>
        ) : (
          <Button
            className={classes.mainButton}
            variant="outlined"
            component={Link}
            to={VaultsRoutesConfig.deposit.generatePath(item.id)}
          >
            <PlusSVG />
            {t('vaults.vault-table.deposit')}
          </Button>
        )}
      </div>
    ),
    [classes, item, hasDeposit, cx],
  );

  return (
    <div className={classes.root}>
      {isMDDown && (
        <div className={classes.topRow}>
          {nameColumn}
          {actionColumn}
        </div>
      )}
      <div className={classes.container}>
        {!isMDDown && nameColumn}
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(apyLoading, apyData, '', '%')}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">
                {t('vaults.vault-table.apy')}
              </Typography>
            </div>
          }
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(tvlLoading, tvlData)}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">
                {t('vaults.vault-table.tvl')}
              </Typography>
            </div>
          }
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(
                depositLoading,
                depositData,
                isUSD ? '$' : '',
                '',
                isUSD ? aBNBcPrice ?? 1 : 1,
              )}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">
                {isUSD ? t('units.USD') : t('units.aBNBc')}
              </Typography>
            </div>
          }
        />
        <ColumnItem
          value={
            <Typography variant="h6">
              {printLoadingNumber(
                yeildLoading,
                yieldData,
                isUSD ? '$' : '',
                '',
                isUSD ? aBNBcPrice ?? 1 : 1,
              )}
            </Typography>
          }
          description={
            <div className={classes.description}>
              <Typography variant="body2">
                {isUSD ? t('units.USD') : t('units.aBNBc')}
              </Typography>
            </div>
          }
        />
        {!isMDDown && actionColumn}
      </div>
    </div>
  );
}
