import { ReactString } from 'types';
import { useTabTitleStyles } from './useTabTitleStyles';

interface TabTitleProps {
  icon: ReactString;
  title: string;
}

export function TabTitle({ icon, title }: TabTitleProps): JSX.Element {
  const { classes } = useTabTitleStyles();
  return (
    <div className={classes.root}>
      {icon}
      {title}
    </div>
  );
}
