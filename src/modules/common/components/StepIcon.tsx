import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as OkaySVG } from '../assets/okay.svg';
import { useStepIconStyles } from './useStepIconStyles';

interface StepIconProps {
  active?: boolean;
  completed?: boolean;
  className?: string;
  icon: ReactNode;
}

export function StepIcon({
  active,
  completed,
  className,
  icon,
}: StepIconProps): JSX.Element {
  const { classes, cx } = useStepIconStyles();

  return (
    <Box
      className={cx(
        classes.root,
        active && classes.rootActive,
        completed && classes.rootCompleted,
        className,
      )}
    >
      {completed ? <OkaySVG className={classes.icon} /> : icon}
    </Box>
  );
}
