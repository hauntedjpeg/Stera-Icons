import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDotsBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineDotsBold = memo(
  forwardRef<SVGSVGElement, ChartLineDotsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 4c1.38 0 2.5 1.12 2.5 2.5S21.38 9 20 9q-.23 0-.44-.04l-2.46 3.69q.39.6.4 1.35c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5q0-.23.04-.44l-2.19-1.46q-.6.39-1.35.4-.23 0-.44-.04L6.1 16.15q.39.6.4 1.35C6.5 18.88 5.38 20 4 20s-2.5-1.12-2.5-2.5S2.62 15 4 15q.23 0 .44.04l2.46-3.69q-.39-.6-.4-1.35c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5q0 .23-.04.44l2.19 1.46q.6-.39 1.35-.4.23 0 .44.04l2.46-3.69q-.39-.6-.4-1.35C17.5 5.12 18.62 4 20 4M4 17c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5q-.01-.27-.22-.42Q4.16 17 4 17m11-3.5q-.27.01-.42.22-.08.13-.08.28c0 .28.22.5.5.5s.5-.22.5-.5q-.01-.27-.22-.42-.12-.08-.28-.08m-6-4c-.28 0-.5.22-.5.5q.01.27.22.42.13.08.28.08.27-.01.42-.22.08-.12.08-.28c0-.28-.22-.5-.5-.5M20 6c-.28 0-.5.22-.5.5q.01.27.22.42.12.08.28.08c.28 0 .5-.22.5-.5S20.28 6 20 6" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartLineDotsBold.displayName = 'ChartLineDotsBold';

// Triple export pattern
export { ChartLineDotsBold, ChartLineDotsBold as ChartLineDotsBoldIcon, ChartLineDotsBold as SiChartLineDotsBold };
export default ChartLineDotsBold;
export type { ChartLineDotsBoldProps };
