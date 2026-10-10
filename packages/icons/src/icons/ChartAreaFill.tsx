import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaFillProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFill = memo(
  forwardRef<SVGSVGElement, ChartAreaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.37 4.4c.24-.26.62-.35.95-.21.34.13.55.45.55.81v12.93c0 1.07-.87 1.94-1.94 1.94H2c-.35 0-.67-.2-.8-.53-.14-.32-.08-.69.17-.94l7.61-8 .07-.07q.25-.2.57-.2.38 0 .63.27l2.7 2.83z" />
    </IconBase>
  ))
);

ChartAreaFill.displayName = 'ChartAreaFill';

// Triple export pattern
export { ChartAreaFill, ChartAreaFill as ChartAreaFillIcon, ChartAreaFill as SiChartAreaFill };
export default ChartAreaFill;
export type { ChartAreaFillProps };
