import { buttonClasses } from '@mui/material';
import { switchClasses } from '@mui/material/Switch';
import { SliderTypeMap } from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import { rgba } from 'utils';
import { COLORS, TRANSITION } from './consts';
import { globalStyles } from './globalStyles';

const baseTheme = createTheme({
  colors: COLORS,
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1280,
      xl: 1536,
    },
  },
});

export const theme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyles,
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: 44,
          margin: 0,
        },

        h2: {
          fontWeight: 600,
          fontSize: 32,
          margin: 0,
        },

        h4: {
          fontWeight: 700,
          fontSize: 20,
          margin: 0,
        },

        h5: {
          fontWeight: 700,
          fontSize: 18,
          margin: 0,
        },

        h6: {
          fontWeight: 700,
          fontSize: 14,
          margin: 0,
        },

        body1: {
          fontSize: 16,
          fontWeight: 400,
        },

        body2: {
          fontSize: 14,
          fontWeight: 500,
        },

        subtitle1: {
          fontSize: 13,
          fontWeight: 400,
        },

        subtitle2: {
          fontSize: 12,
          fontWeight: 400,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          '&&': {
            backgroundColor: COLORS.gray300,
            backgroundImage: 'none',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 60,
          borderRadius: 12,
          paddingRight: 16,
          border: `1px solid ${rgba(COLORS.white, 0.2) ?? ''}`,
          [`&.${buttonClasses.disabled}`]: {
            color: rgba(COLORS.white, 0.5),
          },
        },

        input: {
          height: 32,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 16,
          '&:not(:last-child)': {
            paddingRight: 16,
            marginRight: 12,
            borderRight: `1px solid ${rgba(COLORS.white, 0.2) ?? ''}`,
          },
          [`&.${buttonClasses.disabled}`]: {
            color: rgba(COLORS.white, 0.5),
            WebkitTextFillColor: rgba(COLORS.white, 0.5),
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          marginTop: 12,
          marginLeft: 0,
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          height: 56,
          borderRadius: 12,
          paddingRight: 16,
          backgroundColor: COLORS.gray400,
          '&:before, &:after': {
            display: 'none',
          },
          '&.Mui-error': {
            color: COLORS.pink,
            border: `1px solid ${COLORS.pink}`,
          },
        },

        input: {
          height: 32,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 16,
          borderRadius: 0,
          ':-webkit-autofill': {
            borderRadius: 0,
          },
          '&:not(:last-child)': {
            paddingRight: 16,
            borderRight: `1px solid ${rgba(COLORS.white, 0.2) ?? ''}`,
            marginRight: 12,
          },
          '&.Mui-disabled ': {
            color: COLORS.gray,
            WebkitTextFillColor: 'unset',
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          fontWeight: 600,
          backgroundColor: COLORS.white,
          color: COLORS.black,
          textTransform: 'initial',
          transition: TRANSITION,
          height: 48,
          '&:hover': {
            color: COLORS.black,
            backgroundColor: COLORS.yellow,
          },
          '&:disabled': {
            color: COLORS.gray500,
            backgroundColor: 'transparent',
            border: `1px solid ${COLORS.gray500}`,
          },
        },

        outlined: {
          backgroundColor: 'transparent',
          color: COLORS.gray,
          border: `1px solid ${COLORS.gray}`,
          '&:hover': {
            opacity: 1,
            color: COLORS.yellow,
            backgroundColor: 'transparent',
            border: `1px solid ${COLORS.yellow}`,
            '& > svg': {
              color: COLORS.yellow,
            },
          },
          '&:disabled': {
            opacity: 1,
            color: COLORS.gray500,
            backgroundColor: 'transparent',
            border: `1px solid ${COLORS.gray500}`,
          },
        },

        contained: {
          backgroundColor: COLORS.yellow,
          border: `1px solid ${COLORS.yellow}`,
          '&:hover': {
            color: COLORS.yellow,
            backgroundColor: 'transparent',
          },
          '&:disabled': {
            color: COLORS.gray500,
            backgroundColor: 'transparent',
            border: `1px solid ${COLORS.gray500}`,
          },
        },

        sizeSmall: {
          fontSize: 13,
          borderRadius: 16,
          height: 32,
          width: 32,
          minWidth: 32,
        },

        sizeMedium: {
          fontSize: 14,
          borderRadius: 16,
          height: 48,
        },

        sizeLarge: {
          fontSize: 16,
          borderRadius: 16,
          height: 50,
        },
      },

      variants: [
        {
          props: { size: 'tiny' },
          style: {
            fontSize: 14,
            borderRadius: 20,
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 14,
            paddingRight: 14,
            height: 28,
            minWidth: 80,
          },
        },
      ],
    },

    MuiSlider: {
      defaultProps: {
        valueLabelDisplay: 'off',
      },

      styleOverrides: {
        root: {
          marginTop: 20,
          marginBottom: 0,
          height: 8,
          '@media (pointer: coarse)': {
            padding: '13px 0',
          },
        },

        mark: {
          width: 1,
          top: 6,
          height: 13,
          borderRadius: 0,
          backgroundColor: COLORS.gray,
          transform: 'translate(-1px, -46%)',
          '@media (pointer: coarse)': {
            top: 6,
          },
          '&[data-index="0"]': {
            display: 'none',
          },
        },

        markLabel: {
          top: -20,
          fontSize: 13,
          lineHeight: 1,
          opacity: 0.5,
          color: COLORS.white,
          [baseTheme.breakpoints.down('md')]: {
            transform: 'translateX(-100%)',
          },
          '@media (pointer: coarse)': {
            top: -20,
          },
          '&[data-index="0"]': {
            color: COLORS.green,
            opacity: 1,
            transform: 'initial',
            fontWeight: 600,
            '@media (pointer: coarse)': {
              transform: 'initial',
            },
            '&.error': {
              color: COLORS.red,
            },
          },
        },

        track: {
          color: COLORS.yellow,
          border: 'none',
          borderRadius: 20,
          '&.error': {
            color: COLORS.red,
          },
        },

        rail: {
          borderRadius: 20,
          backgroundColor: COLORS.gray500,
          opacity: 1,
        },

        thumb: {
          backgroundColor: COLORS.black,
          width: 20,
          height: 20,
          border: `1px solid ${COLORS.yellow}`,
          '&.error': {
            backgroundColor: COLORS.red,
          },
        },

        valueLabel: {
          top: -6,
          backgroundColor: 'transparent',
          fontSize: 14,
          color: COLORS.lightGray,
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '20px 0',
          fontSize: 14,
          fontWeight: 700,
          color: COLORS.white,
          [baseTheme.breakpoints.down('md')]: {
            padding: '14px 0',
          },
        },
        secondaryAction: {
          fontFeatureSettings: "'calt' off",
          fontWeight: 400,
        },
        divider: {
          borderBottom: `1px solid ${rgba(COLORS.white, 0.1) || ''}`,
        },
      },
    },

    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          position: 'initial',
          transform: 'none',
          fontSize: 14,
          fontWeight: 400,
          color: COLORS.white,
          wordBreak: 'break-all',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: '12px 28px',
          backgroundColor: '#202020',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '17px',
          color: rgba(COLORS.white, 0.5),
          borderBottom: 'none',
          '&:first-of-type': {
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
          },
          '&:last-child': {
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
          },
        },
        body: {
          padding: '22px 28px',
          borderBottom: `1px solid ${rgba(COLORS.white, 0.2) ?? ''}`,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            backgroundColor: COLORS.yellow,
          },
          '& .MuiTabs-flexContainer': {
            gap: '20px',
          },
        },
        flexContainer: {
          borderBottom: `2px solid ${COLORS.gray500}`,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 700,
          padding: '16px 30px',
          textTransform: 'none',
          color: COLORS.gray,
          flexBasis: 'unset',
          flexGrow: 'unset',
          '&.Mui-selected': {
            color: COLORS.yellow,
          },
          '&:hover': {
            color: COLORS.yellow,
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.gray300,
          borderRadius: 0,
          padding: 20,
        },
        paperAnchorBottom: {
          '&&': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: COLORS.gray300,
          borderRadius: '16px',
          color: COLORS.white,
          padding: 20,
          fontSize: 12,
          border: `1px solid ${COLORS.gray500}`,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          height: 56,
          lineHeight: '38px',
          padding: 0,
          fontSize: 24,
          fontWeight: 700,
          borderRadius: 16,
          backgroundColor: COLORS.gray400,
          border: `1px solid ${COLORS.gray500}`,
          '&::before, &::after': {
            display: 'none',
          },
          '&:hover': {
            border: `1px solid ${COLORS.yellow}`,
          },
          '& > div': {
            fontWeight: 700,
            fontSize: 14,
          },
        },
        select: {
          display: 'flex',
          alignItems: 'center',
          padding: baseTheme.spacing(0, 2),
          fontWeight: 700,
          '&:focus': {
            backgroundColor: 'transparent',
          },
          img: {
            width: 24,
            marginRight: 10,
          },
          '&&': {
            paddingRight: 40,
          },
        },
        icon: {
          top: 16,
          right: 16,
          transition: '0.2s all',
          color: COLORS.white,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          height: 56,
          fontSize: 14,
          fontWeight: 700,
          backgroundColor: COLORS.gray400,
          '&:not(:last-child)': {
            borderBottom: `1px solid ${COLORS.yellow}`,
          },
          '&&': {
            '&.Mui-selected': {
              backgroundColor: COLORS.gray500,
            },
            '&:hover, &.Mui-focused': {
              backgroundColor: COLORS.gray500,
            },
          },
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          marginTop: 10,
          boxShadow: 'none',
          borderRadius: 0,
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: rgba(COLORS.white, 0.3),
          [`&.${switchClasses.checked}`]: {
            color: COLORS.yellow,
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 16,
          padding: 0,
          display: 'flex',
          '&:active': {
            '& .MuiSwitch-thumb': {
              width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
              transform: 'translateX(9px)',
            },
          },
          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: COLORS.gray400,
              },
              '& .MuiSwitch-thumb': {
                backgroundColor: COLORS.yellow,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            borderRadius: 16 / 2,
            backgroundColor: COLORS.gray400,
            boxSizing: 'border-box',
          },
        },
      },
    },

    MuiStepper: {
      styleOverrides: {
        root: {
          alignItems: 'center',
        },
      },
    },

    MuiStepConnector: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },

    MuiStep: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        },
      },
    },

    MuiStepLabel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        iconContainer: {
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },

  palette: {
    mode: 'dark',
    common: {
      black: COLORS.black,
      white: COLORS.white,
    },

    primary: {
      main: COLORS.white,
      dark: COLORS.white,
    },

    secondary: {
      main: COLORS.black,
    },

    text: {
      primary: COLORS.white,
      secondary: COLORS.black,
    },

    error: {
      main: COLORS.pink,
    },

    black: COLORS.black,
    white: COLORS.white,
    green: COLORS.green,
    pink: COLORS.pink,
    yellow: COLORS.yellow,
    gray: COLORS.gray,
    gray300: COLORS.gray300,
    gray400: COLORS.gray400,
    gray500: COLORS.gray500,
  },
});

export const SliderErrorClasses: SliderTypeMap['props']['classes'] = {
  markLabel: 'error',
  track: 'error',
  thumb: 'error',
};
