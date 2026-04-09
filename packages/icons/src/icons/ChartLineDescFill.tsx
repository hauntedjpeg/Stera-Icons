import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescFill = memo(
  forwardRef<SVGSVGElement, ChartLineDescFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-fill" {...props}>
      <path d="M21 17.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 0 1 0-2.5zM3.2 4.04a1.25 1.25 0 0 1 1.76.16l4.73 5.67 4.46-2a1.3 1.3 0 0 1 1.38.23l.07.07 5.33 6a1.25 1.25 0 0 1-1.86 1.66l-4.73-5.31-4.5 2.02c-.5.23-1.1.1-1.47-.34L3.04 5.8a1.25 1.25 0 0 1 .16-1.76" />
    </IconBase>
  ))
);

ChartLineDescFill.displayName = 'ChartLineDescFill';

// Triple export pattern (lucide-react style)
export { ChartLineDescFill, ChartLineDescFill as ChartLineDescFillIcon, ChartLineDescFill as SiChartLineDescFill };
export default ChartLineDescFill;
export type { ChartLineDescFillProps };
