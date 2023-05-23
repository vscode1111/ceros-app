import { ProgressBarData } from 'modules/common';
import { CSSProperties } from 'react';

const STATS_BORDER_RADIUS = 8;

export interface StatData {
  value: number;
  color: string;
  label: string;
  free?: number;
}

function getBorderStyles(
  isFirst: boolean,
  isLast: boolean,
  borderRadius: number,
): CSSProperties {
  return {
    borderTopLeftRadius: isFirst ? borderRadius : 0,
    borderBottomLeftRadius: isFirst ? borderRadius : 0,
    borderTopRightRadius: isLast ? borderRadius : 0,
    borderBottomRightRadius: isLast ? borderRadius : 0,
  };
}

export function getProgressBarData(stats: StatData[]): ProgressBarData[] {
  const result: ProgressBarData[] = [];
  let startValue = 0;
  stats.forEach((stat, index) => {
    const isFirst = index === 0;
    const isLast = index === stats.length - 1;
    const { free } = stat;
    result.push({
      startValue,
      value: startValue + stat.value,
      label: stat.label,
      style: {
        background: stat.color,
        ...getBorderStyles(isFirst, isLast, STATS_BORDER_RADIUS),
      },
      children: free
        ? [
            {
              style: {
                position: 'absolute',
                background: `repeating-linear-gradient(45deg, black, black 2px, #404A43 2px, #404A43 10px)`,
                left: `calc(100% - ${free}%)`,
                width: `${free}%`,
                height: '100%',
                ...getBorderStyles(false, isLast, STATS_BORDER_RADIUS),
              },
            },
          ]
        : [],
    });
    startValue += stat.value;
  });
  return result;
}
