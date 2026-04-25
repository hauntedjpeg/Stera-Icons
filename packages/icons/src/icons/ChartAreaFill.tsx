import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaFillProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFill = memo(
  forwardRef<SVGSVGElement, ChartAreaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.37 4.4a.88.88 0 0 1 1.5.6v12.93c0 1.07-.87 1.94-1.94 1.94H2a.88.88 0 0 1-.63-1.47l7.62-8 .06-.07a.9.9 0 0 1 1.2.07l2.7 2.83z" />
    </IconBase>
  ))
);

ChartAreaFill.displayName = 'ChartAreaFill';

// Triple export pattern (lucide-react style)
export { ChartAreaFill, ChartAreaFill as ChartAreaFillIcon, ChartAreaFill as SiChartAreaFill };
export default ChartAreaFill;
export type { ChartAreaFillProps };
