import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleFillProps = Omit<IconBaseProps, 'children'>;

const ChartCandleFill = memo(
  forwardRef<SVGSVGElement, ChartCandleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-fill" {...props}>
      <path d="M7 1.13c.48 0 .88.39.88.87v2.13H9c1.04 0 1.88.83 1.88 1.87v12c0 1.04-.84 1.88-1.88 1.88H7.88V22a.88.88 0 0 1-1.75 0v-2.12H5A1.9 1.9 0 0 1 3.13 18V6c0-1.04.83-1.87 1.87-1.87h1.13V2c0-.48.39-.87.87-.87M17 3.13c.48 0 .88.39.88.87v2.13H19c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1.12V20a.88.88 0 0 1-1.75 0v-2.12H15A1.9 1.9 0 0 1 13.13 16V8c0-1.04.83-1.87 1.87-1.87h1.13V4c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartCandleFill.displayName = 'ChartCandleFill';

// Triple export pattern (lucide-react style)
export { ChartCandleFill, ChartCandleFill as ChartCandleFillIcon, ChartCandleFill as SiChartCandleFill };
export default ChartCandleFill;
export type { ChartCandleFillProps };
