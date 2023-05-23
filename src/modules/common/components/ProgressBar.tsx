import { CSSProperties } from 'react';
import { uid } from 'react-uid';

export interface ProgressBarData {
  startValue?: number;
  value: number;
  label: string;
  style?: CSSProperties;
  children?: {
    style?: CSSProperties;
  }[];
}

interface ProgressBarProps {
  height: number;
  data: ProgressBarData[];
  style?: CSSProperties;
  gap?: number;
}

const TEXT_HEIGHT = 14;
const TEXT_GAP = 9;

export function ProgressBar({
  data,
  height,
  style,
  gap,
}: ProgressBarProps): JSX.Element {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: height + TEXT_HEIGHT + TEXT_GAP,
        ...style,
      }}
    >
      {data.map((item, index) => {
        const localGap = (gap || 0) / 2;
        let startValue = item.startValue || 0;
        if (index !== 0) {
          startValue += localGap;
        }
        let width = item.value - startValue;
        if (index !== data.length - 1) {
          width -= localGap;
        }
        return (
          <div key={uid(item)}>
            <div
              style={{
                position: 'absolute',
                left: `${startValue}%`,
                height,
                width: `${width}%`,
                overflow: 'hidden',
                ...item?.style,
              }}
            >
              {item?.children?.map(child => (
                <div key={uid(child)} style={child?.style} />
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                top: height + TEXT_GAP,
                left: `${startValue}%`,
                height: TEXT_HEIGHT,
                width: `${width}%`,
                textAlign: 'center',
                fontSize: 14,
              }}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
