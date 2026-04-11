import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 22a.88.88 0 0 1-1.75 0v-2.12h1.75zM17.88 20a.88.88 0 0 1-1.75 0v-2.12h1.75zM17 3.13c.48 0 .88.39.88.87v2.13h-1.75V4c0-.48.39-.87.87-.87M7 1.13c.48 0 .88.39.88.87v2.13H6.13V2c0-.48.39-.87.87-.87" opacity={0.4} />
        <path d="M9 4.13c1.04 0 1.88.83 1.88 1.87v12c0 1.04-.84 1.88-1.88 1.88H5A1.9 1.9 0 0 1 3.13 18V6c0-1.04.83-1.87 1.87-1.87zM19 6.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-4A1.9 1.9 0 0 1 13.13 16V8c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

ChartCandleFillDuotone.displayName = 'ChartCandleFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleFillDuotone, ChartCandleFillDuotone as ChartCandleFillDuotoneIcon, ChartCandleFillDuotone as SiChartCandleFillDuotone };
export default ChartCandleFillDuotone;
export type { ChartCandleFillDuotoneProps };
