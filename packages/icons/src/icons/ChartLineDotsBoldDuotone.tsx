import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDotsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDotsBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDotsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.9 11.35q.28.45.71.73.42.29.95.38L6.1 16.15q-.28-.45-.71-.73-.42-.29-.95-.38zM13.65 11.9q-.45.28-.73.71-.29.42-.38.95l-2.19-1.46q.45-.28.73-.71.29-.42.38-.95zM17.9 7.85q.28.45.71.73.42.29.95.38l-2.46 3.69q-.28-.45-.71-.73-.42-.29-.95-.38z" opacity={0.4} />
        <path fillRule="evenodd" d="M4 15q.78 0 1.39.42c.67.45 1.11 1.21 1.11 2.08C6.5 18.88 5.38 20 4 20s-2.5-1.12-2.5-2.5S2.62 15 4 15m0 2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5q-.01-.27-.22-.42Q4.16 17 4 17M15 11.5q.78 0 1.39.42c.67.45 1.11 1.21 1.11 2.08 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5q0-.78.42-1.39c.45-.67 1.21-1.11 2.08-1.11m0 2q-.27.01-.42.22-.08.13-.08.28c0 .28.22.5.5.5s.5-.22.5-.5q-.01-.27-.22-.42-.12-.08-.28-.08M9 7.5c1.38 0 2.5 1.12 2.5 2.5q0 .78-.42 1.39c-.45.67-1.21 1.11-2.08 1.11q-.78 0-1.39-.42C6.94 11.63 6.5 10.87 6.5 10c0-1.38 1.12-2.5 2.5-2.5m0 2c-.28 0-.5.22-.5.5q.01.27.22.42.13.08.28.08.27-.01.42-.22.08-.12.08-.28c0-.28-.22-.5-.5-.5M20 4c1.38 0 2.5 1.12 2.5 2.5S21.38 9 20 9q-.78 0-1.39-.42c-.67-.45-1.11-1.21-1.11-2.08C17.5 5.12 18.62 4 20 4m0 2c-.28 0-.5.22-.5.5q.01.27.22.42.12.08.28.08c.28 0 .5-.22.5-.5S20.28 6 20 6" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartLineDotsBoldDuotone.displayName = 'ChartLineDotsBoldDuotone';

// Triple export pattern
export { ChartLineDotsBoldDuotone, ChartLineDotsBoldDuotone as ChartLineDotsBoldDuotoneIcon, ChartLineDotsBoldDuotone as SiChartLineDotsBoldDuotone };
export default ChartLineDotsBoldDuotone;
export type { ChartLineDotsBoldDuotoneProps };
