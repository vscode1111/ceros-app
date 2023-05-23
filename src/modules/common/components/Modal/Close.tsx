import { TRANSITION } from 'modules/common';
import { makeStyles } from 'tss-react/mui';
import { rgba } from 'utils';
import { ReactComponent as CloseSVG } from './assets/close.svg';
import { ReactComponent as CloseIconMobile } from './assets/close_mobile.svg';

interface Props {
  className?: string;
  onClose(): void;
}

export function Close({ className, onClose }: Props): JSX.Element {
  const { classes, cx } = useStyles();

  return (
    <button
      type="button"
      onClick={onClose}
      className={cx(classes.root, className)}
    >
      <CloseSVG />
      <CloseIconMobile />
    </button>
  );
}

const useStyles = makeStyles()(theme => ({
  root: {
    padding: 0,
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: TRANSITION,
    color: rgba(theme.colors.black, 0.5),

    '&:hover': {
      color: theme.colors.black,
    },

    '& > svg': {
      [theme.breakpoints.up('md')]: {
        '&:last-child': {
          display: 'none',
        },
      },

      [theme.breakpoints.down('md')]: {
        '&:first-of-type': {
          display: 'none',
        },
      },
    },
  },
}));
