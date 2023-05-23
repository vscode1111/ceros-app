import React from 'react';
import { useBarChartStyles } from './useBarChartStyles';

const readings = [
  {
    name: 'Apples',
    value: 60,
    color: '#eb4d4b',
  },
  {
    name: 'Blueberries',
    value: 7,
    color: '#22a6b3',
  },
  {
    name: 'Guavas',
    value: 23,
    color: '#6ab04c',
  },
  {
    name: 'Grapes',
    value: 10,
    color: '#e056fd',
  },
];

export function BarChart(): JSX.Element {
  const { classes } = useBarChartStyles();

  const bars =
    readings &&
    readings.length &&
    readings.map(item => {
      return (
        <div
          key={item.name}
          className={classes.bar}
          style={{ backgroundColor: item.color, width: `${item.value}%` }}
        />
      );
    });

  return (
    <div className={classes.multicolorBar}>
      <div className={classes.bars}>{bars}</div>
    </div>
  );
}
