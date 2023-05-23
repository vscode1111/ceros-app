/* eslint-disable react/no-array-index-key */
import { Typography } from '@mui/material';
import { Tooltip } from 'modules/common';
import { uid } from 'react-uid';
import { useInfoItemStyles } from './useInfoItemStyles';

interface InfoItemProps {
  title: string;
  tooltip: string;
  values: string[];
  className?: string;
}

export function InfoItem({
  title,
  tooltip,
  values,
  className,
}: InfoItemProps): JSX.Element {
  const { classes, cx } = useInfoItemStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <Tooltip title={tooltip} />
      </div>
      <div className={classes.valuesWrapper}>
        {values.map((value, index) => (
          <Typography
            className={classes.values}
            key={`${uid(value)}_${index}`}
            variant="h2"
            color="white"
          >
            {value}
          </Typography>
        ))}
      </div>
    </div>
  );
}
