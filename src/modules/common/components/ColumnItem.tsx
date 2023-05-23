import { useVaultColumnItemStyles } from './useVaultColumnItemStyles';
import { ReactString } from 'types';

interface ColumnItemProps {
  value: ReactString;
  description?: ReactString;
  gap?: string;
  className?: string;
}

export function ColumnItem({
  value,
  description,
  gap = '8px',
  className,
}: ColumnItemProps): JSX.Element {
  const { classes, cx } = useVaultColumnItemStyles();
  return (
    <div className={cx(classes.root, className)} style={{ gap }}>
      {value}
      {description && description}
    </div>
  );
}
