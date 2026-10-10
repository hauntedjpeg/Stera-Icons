import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M19.23 4.36c.36-.42.99-.48 1.41-.13s.48.99.13 1.41l-5.34 6.4c-.28.34-.76.46-1.17.27l-4.67-2.1-4.84 5.45c-.37.42-1 .45-1.41.09-.42-.37-.45-1-.09-1.41l5.34-6 .11-.12c.3-.23.7-.29 1.04-.13l4.64 2.09z" />
    </IconBase>
  ))
);

ChartLineBoldDuotone.displayName = 'ChartLineBoldDuotone';

// Triple export pattern
export { ChartLineBoldDuotone, ChartLineBoldDuotone as ChartLineBoldDuotoneIcon, ChartLineBoldDuotone as SiChartLineBoldDuotone };
export default ChartLineBoldDuotone;
export type { ChartLineBoldDuotoneProps };
