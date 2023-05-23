import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export function useHeader(): {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
} {
  const location = useLocation();
  const { breakpoints } = useTheme();
  const mdWidth = breakpoints.values.md;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!showMenu) {
      return;
    }

    function handler() {
      setShowMenu(false);
    }

    const listener = window.matchMedia(`(max-width: ${mdWidth}px)`);
    listener.addEventListener('change', handler);
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.removeProperty('overflow-y');
      listener.removeEventListener('change', handler);
    };
  }, [showMenu, mdWidth]);

  return {
    showMenu,
    setShowMenu,
  };
}
