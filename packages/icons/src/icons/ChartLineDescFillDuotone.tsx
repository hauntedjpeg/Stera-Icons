import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-fill-duotone" {...props}>
      <path d="M21 17.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M3.2 4.04a1.25 1.25 0 0 1 1.76.16L9.7 9.87l4.46-2a1.3 1.3 0 0 1 1.38.23l.07.07 5.34 6a1.25 1.25 0 0 1-1.87 1.66l-4.73-5.31-4.5 2.02c-.5.23-1.1.1-1.47-.34L3.04 5.8a1.25 1.25 0 0 1 .16-1.76" />
    </IconBase>
  ))
);

ChartLineDescFillDuotone.displayName = 'ChartLineDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineDescFillDuotone, ChartLineDescFillDuotone as ChartLineDescFillDuotoneIcon, ChartLineDescFillDuotone as SiChartLineDescFillDuotone };
export default ChartLineDescFillDuotone;
export type { ChartLineDescFillDuotoneProps };
