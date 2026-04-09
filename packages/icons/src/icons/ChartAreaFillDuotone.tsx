import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-fill-duotone" {...props}>
      <path d="M2.02 19.88H2zM22.88 5v12.93c0 1.07-.88 1.94-1.95 1.95H2.03q.35-.01.6-.28l6.99-7.33 2.7 2.83a.9.9 0 0 0 1.27 0l9.04-9.5q.26-.27.24-.6" opacity={0.4} />
        <path d="M21.37 4.4a.88.88 0 0 1 1.26 1.2l-9.04 9.5a.9.9 0 0 1-1.27 0l-2.7-2.83-6.99 7.33a.88.88 0 0 1-1.26-1.2l7.62-8 .06-.07a.9.9 0 0 1 1.2.07l2.7 2.83z" />
    </IconBase>
  ))
);

ChartAreaFillDuotone.displayName = 'ChartAreaFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartAreaFillDuotone, ChartAreaFillDuotone as ChartAreaFillDuotoneIcon, ChartAreaFillDuotone as SiChartAreaFillDuotone };
export default ChartAreaFillDuotone;
export type { ChartAreaFillDuotoneProps };
