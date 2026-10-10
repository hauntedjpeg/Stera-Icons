import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineFill = memo(
  forwardRef<SVGSVGElement, ChartLineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM19.04 4.2c.44-.53 1.23-.6 1.76-.16s.6 1.23.16 1.76l-5.33 6.4c-.36.43-.97.57-1.48.34l-4.5-2.02-4.72 5.31c-.45.52-1.24.56-1.76.1-.52-.45-.56-1.24-.1-1.76l5.33-6 .07-.07c.37-.35.91-.45 1.38-.24l4.46 2.01z" />
    </IconBase>
  ))
);

ChartLineFill.displayName = 'ChartLineFill';

// Triple export pattern
export { ChartLineFill, ChartLineFill as ChartLineFillIcon, ChartLineFill as SiChartLineFill };
export default ChartLineFill;
export type { ChartLineFillProps };
