import { useListStyles } from './useListStyles';
import { Children, ReactNode, useMemo } from 'react';

interface ListProps {
  children?: ReactNode;
}

export function List({ children }: ListProps): JSX.Element {
  const { classes } = useListStyles();

  const newChildren = useMemo(
    () =>
      Children.map(children, child => {
        return <div className={classes.item}>{child}</div>;
      }),
    [children, classes],
  );
  return <div className={classes.root}>{newChildren}</div>;
}
