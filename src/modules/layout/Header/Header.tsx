import Box from '@mui/material/Box';
import logoIcon from './assets/logo.svg';
import { Link } from 'react-router-dom';
import { VaultsRoutesConfig } from 'modules/vaults';
import { Account } from './Account';
import { MenuLinks } from './MenuLinks';
import { useHeaderStyles } from './useHeaderStyles';
import { MenuButton } from './MenuButton';
import { useHeader, useIsMDDown } from 'modules/common';
import { useMemo } from 'react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): JSX.Element {
  const { classes, cx } = useHeaderStyles();
  const { showMenu, setShowMenu } = useHeader();
  const isMDDown = useIsMDDown();

  const toggleContainer = useMemo(
    () => (
      <div className={classes.toggleContainer}>
        {isMDDown && (
          <MenuButton
            className={classes.menuButton}
            active={showMenu}
            onClick={() => setShowMenu(value => !value)}
          />
        )}
        <Link
          className={classes.link}
          to={VaultsRoutesConfig.dashboard.generatePath()}
        >
          <img src={logoIcon} alt="Ceros" />
        </Link>
      </div>
    ),
    [classes, isMDDown, showMenu, setShowMenu],
  );

  return (
    <header className={cx(classes.root, className)}>
      {toggleContainer}
      {!isMDDown && <MenuLinks className={classes.menuLinks} />}
      {!showMenu && (
        <Box display="flex" alignItems="center" order={3}>
          <Account />
        </Box>
      )}
      {showMenu && (
        <div className={classes.menu}>
          <div className={classes.menuToggleContainer}>{toggleContainer}</div>
          <MenuLinks />
        </div>
      )}
    </header>
  );
}
