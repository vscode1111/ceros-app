import { Box, SxProps, Theme } from '@mui/material';
import { ReactString } from 'types';

interface MenuItemOptionProps {
  label?: ReactString;
  logo?: ReactString;
  sx?: SxProps<Theme>;
}

function getLogo(logo?: ReactString, label?: ReactString) {
  if (typeof logo === 'string')
    return <img src={logo} alt={typeof label === 'string' ? label : 'alt'} />;
  return logo;
}

export function MenuItemOption({
  label,
  logo,
  sx,
}: MenuItemOptionProps): JSX.Element {
  const logoInt = getLogo(logo, label);

  return (
    <Box display="flex" sx={sx}>
      {logoInt && <>{logoInt}</>}
      {label && <>{label}</>}
    </Box>
  );
}
