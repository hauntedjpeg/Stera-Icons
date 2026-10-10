import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M23 5v12.93c0 1.14-.93 2.07-2.07 2.07H2.03q.39 0 .7-.31L4.32 18h16.6q.06 0 .07-.07V7.5l1.72-1.81q.29-.31.28-.7z" opacity={.4} />
        <path d="M21.28 4.31c.38-.4 1-.42 1.4-.03.4.38.43 1 .04 1.4l-9.04 9.5q-.3.31-.73.32-.42 0-.72-.31l-2.61-2.74-6.9 7.24c-.38.4-1.01.42-1.4.03-.4-.38-.43-1-.04-1.4l7.61-8.01.08-.07q.28-.23.65-.24.42 0 .72.31l2.61 2.74z" />
    </IconBase>
  ))
);

ChartAreaBoldDuotone.displayName = 'ChartAreaBoldDuotone';

// Triple export pattern
export { ChartAreaBoldDuotone, ChartAreaBoldDuotone as ChartAreaBoldDuotoneIcon, ChartAreaBoldDuotone as SiChartAreaBoldDuotone };
export default ChartAreaBoldDuotone;
export type { ChartAreaBoldDuotoneProps };
