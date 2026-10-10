import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 17.5c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1s-1-.45-1-1v-.5c0-.55.45-1 1-1M9 14c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1M13 15c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1M17 13c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1M21 9c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1s-1-.45-1-1v-9c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M20.31 4.28c.4-.38 1.03-.37 1.41.03s.37 1.03-.03 1.41l-8.1 7.74c-.38.37-.97.37-1.36.02l-2.48-2.24-6.08 5.5c-.4.37-1.04.34-1.41-.07-.37-.4-.34-1.04.07-1.41l6.75-6.11c.38-.35.96-.35 1.34 0l2.46 2.22z" />
    </IconBase>
  ))
);

ChartLineBarRegularDuotone.displayName = 'ChartLineBarRegularDuotone';

// Triple export pattern
export { ChartLineBarRegularDuotone, ChartLineBarRegularDuotone as ChartLineBarRegularDuotoneIcon, ChartLineBarRegularDuotone as SiChartLineBarRegularDuotone };
export default ChartLineBarRegularDuotone;
export type { ChartLineBarRegularDuotoneProps };
