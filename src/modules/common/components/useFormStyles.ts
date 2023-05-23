import { makeStyles } from 'tss-react/mui';

export const useFormStyles = makeStyles()(theme => ({
  formRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 30,
    gap: '30px',
    width: '100%',
  },
  simpleMainBlock: {
    gap: '40px',
    backgroundColor: theme.colors.gray300,
    borderRadius: 32,
    padding: 40,
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  mainBlock: {
    gap: '40px',
    backgroundColor: theme.colors.gray300,
    borderRadius: 32,
    padding: 40,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
  },
  tabPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  maxButton: {
    width: 56,
    height: 32,
    backgroundColor: theme.colors.gray500,
    border: 'none',
    '&:hover': {
      backgroundColor: theme.colors.gray500,
    },
  },
  fullWidth: {
    width: '100%',
  },
  startAdornment: {
    display: 'flex',
    marginLeft: 4,
  },
  endAdornment: {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      marginRight: 12,
    },
  },
  line: {
    width: '100%',
    height: '1px',
    borderTop: `1px solid ${theme.colors.gray500}`,
  },
  descriptionBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: '16px',
  },
  descriptionBlockRow: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  descriptionBlockTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  hiddenBlock: {
    width: 113,
    height: 40,
  },
  tabs: {
    width: '100%',
    background: `linear-gradient($ theme.colors.gray500},$ theme.colors.gray500}) 0 calc(100% + 0px)/100% 3px no-repeat`,
  },
  halfOpacity: {
    opacity: 0.5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: '16px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse',
    },
  },
  buttonSubContainer: {
    display: 'flex',
    width: '100%',
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  vaultsHeaderItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    color: theme.colors.gray,
    '&&': {
      fontSize: 14,
    },
  },
  roundButton: {
    '&&': {
      height: 40,
      borderRadius: 20,
    },
  },
  traitContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  trait: {
    width: 64,
    height: 4,
    backgroundColor: theme.colors.gray500,
  },
  drawer: {
    '&.MuiPaper': {
      borderRadius: 24,
    },
  },
}));
