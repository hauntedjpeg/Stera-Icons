import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineFill = memo(
  forwardRef<SVGSVGElement, ChartLineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-fill" {...props}>
      <path d="M21 17.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 0 1 0-2.5zM19.04 4.2a1.25 1.25 0 1 1 1.92 1.6l-5.33 6.4c-.36.43-.97.57-1.48.34l-4.5-2.02-4.72 5.31a1.25 1.25 0 0 1-1.86-1.66l5.33-6 .07-.07c.37-.35.91-.45 1.38-.24l4.46 2.01z" />
    </IconBase>
  ))
);

ChartLineFill.displayName = 'ChartLineFill';

// Triple export pattern (lucide-react style)
export { ChartLineFill, ChartLineFill as ChartLineFillIcon, ChartLineFill as SiChartLineFill };
export default ChartLineFill;
export type { ChartLineFillProps };
