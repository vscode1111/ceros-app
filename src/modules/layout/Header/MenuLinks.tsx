import { NavLink } from 'react-router-dom';
import { DocsRoutesConfig } from 'modules/docs';
import { VaultsRoutesConfig } from 'modules/vaults';
import { t } from 'modules/i18n';
import { useMenuLinksStyles } from './useMenuLinksStyles';
import { NetworkList, useIsSMDown } from 'modules/common';

interface Props {
  className?: string;
}

export function MenuLinks({ className }: Props): JSX.Element {
  const { classes, cx } = useMenuLinksStyles();
  const isSMDown = useIsSMDown();
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.linkContainer}>
        <NavLink
          className={classes.navLink}
          to={VaultsRoutesConfig.dashboard.generatePath()}
        >
          {t('header.menu-links.vaults')}
        </NavLink>
        <NavLink
          className={classes.navLink}
          to={DocsRoutesConfig.dashboard.generatePath()}
        >
          {t('header.menu-links.docs')}
        </NavLink>
      </div>
      {isSMDown && <NetworkList linkClassName={classes.networkList} />}
    </div>
  );
}
