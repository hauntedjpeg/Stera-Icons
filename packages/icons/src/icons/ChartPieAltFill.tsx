import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltFillProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltFill = memo(
  forwardRef<SVGSVGElement, ChartPieAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt-fill" {...props}>
      <path d="M8.16 2.9a.87.87 0 0 1 .68 1.61 8.13 8.13 0 0 0 6.22 15.02.88.88 0 0 1 .65 1.62q-1.73.72-3.71.73A9.88 9.88 0 0 1 8.16 2.9" />
        <path d="M20.54 9.68a.88.88 0 0 1 1.2.66q.13.82.14 1.66c0 2.73-1.11 5.2-2.9 6.98a.9.9 0 0 1-1.23 0l-4.84-4.83a.88.88 0 0 1 .29-1.43zM12 2.13a9.9 9.9 0 0 1 8.05 4.16.88.88 0 0 1-.37 1.31l-7.34 3.04a.88.88 0 0 1-1.21-.8V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartPieAltFill.displayName = 'ChartPieAltFill';

// Triple export pattern (lucide-react style)
export { ChartPieAltFill, ChartPieAltFill as ChartPieAltFillIcon, ChartPieAltFill as SiChartPieAltFill };
export default ChartPieAltFill;
export type { ChartPieAltFillProps };
