import { useMediaQuery, useTheme } from '@mui/material';

export const useIsXSDown = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('xs'));
};

export const useIsSMDown = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};

export const useIsMDDown = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

export const useIsMDUp = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
};

export const useIsLGDown = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('lg'));
};
