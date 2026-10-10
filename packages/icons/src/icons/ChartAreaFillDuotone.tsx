import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.02 19.88H2zM22.88 5v12.93c0 1.07-.88 1.94-1.95 1.95H2.03q.35-.01.6-.28l6.99-7.33 2.7 2.83c.16.18.4.27.63.28q.37 0 .64-.28l9.04-9.5q.26-.27.24-.6" opacity={0.4} />
        <path d="M21.37 4.4c.33-.35.88-.37 1.23-.03s.37.88.03 1.23l-9.04 9.5q-.27.27-.64.27t-.63-.27l-2.7-2.83-6.99 7.33c-.33.35-.88.37-1.23.03s-.37-.88-.03-1.23l7.62-8 .06-.07q.25-.2.57-.2.38 0 .63.27l2.7 2.83z" />
    </IconBase>
  ))
);

ChartAreaFillDuotone.displayName = 'ChartAreaFillDuotone';

// Triple export pattern
export { ChartAreaFillDuotone, ChartAreaFillDuotone as ChartAreaFillDuotoneIcon, ChartAreaFillDuotone as SiChartAreaFillDuotone };
export default ChartAreaFillDuotone;
export type { ChartAreaFillDuotoneProps };
