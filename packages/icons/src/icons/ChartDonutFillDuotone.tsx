import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut-fill-duotone" {...props}>
      <path d="M21.42 9.04a9.9 9.9 0 0 1-1.85 9.3l-4.6-4.6a3.4 3.4 0 0 0 .44-2.2zM12.88 2.17a9.9 9.9 0 0 1 7.87 5.26l-6 2.49a3.5 3.5 0 0 0-1.87-1.25z" opacity={0.4} />
        <path d="M11.13 8.67a3.45 3.45 0 1 0 2.6 6.3l4.6 4.6a9.88 9.88 0 1 1-7.21-17.4z" />
    </IconBase>
  ))
);

ChartDonutFillDuotone.displayName = 'ChartDonutFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutFillDuotone, ChartDonutFillDuotone as ChartDonutFillDuotoneIcon, ChartDonutFillDuotone as SiChartDonutFillDuotone };
export default ChartDonutFillDuotone;
export type { ChartDonutFillDuotoneProps };
