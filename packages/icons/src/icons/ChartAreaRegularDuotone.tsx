import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22.75 5v12.93c0 1-.82 1.82-1.82 1.82H2.02q.3 0 .52-.23l1.21-1.27h17.18c.18 0 .32-.14.32-.32V6.87l1.3-1.35q.2-.24.2-.53z" opacity={.4} />
        <path d="M21.46 4.48c.28-.3.76-.3 1.06-.02s.3.76.02 1.06l-9.04 9.5q-.23.23-.55.23-.31 0-.54-.23l-2.8-2.93-7.07 7.43c-.28.3-.76.3-1.06.02s-.3-.76-.02-1.06l7.62-8 .05-.05q.21-.18.49-.18.32 0 .54.23l2.8 2.93z" />
    </IconBase>
  ))
);

ChartAreaRegularDuotone.displayName = 'ChartAreaRegularDuotone';

// Triple export pattern
export { ChartAreaRegularDuotone, ChartAreaRegularDuotone as ChartAreaRegularDuotoneIcon, ChartAreaRegularDuotone as SiChartAreaRegularDuotone };
export default ChartAreaRegularDuotone;
export type { ChartAreaRegularDuotoneProps };
