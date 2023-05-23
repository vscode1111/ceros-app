import { ReactNode } from 'react';

type StringNumber = string | number;

interface TabPanelProps {
  children?: ReactNode;
  index: StringNumber;
  value: StringNumber;
  className?: string;
}

export function TabPanel({
  children,
  value,
  index,
  className,
}: TabPanelProps): JSX.Element {
  return (
    <div
      style={{
        width: '100%',
        display: value === index ? 'inherit' : 'none',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
