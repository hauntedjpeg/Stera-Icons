import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.75 15.92c0-.28-.22-.5-.5-.5h-8.5v-1.5h5c.28 0 .5-.23.5-.5v-2.84c0-.27-.22-.5-.5-.5h-5v-1.5h12c.28 0 .5-.22.5-.5V5.25c0-.28-.22-.5-.5-.5h-12v-1.5h12c1.1 0 2 .9 2 2v2.83c0 1.1-.9 2-2 2h-5.07q.07.24.07.5v2.84q0 .26-.07.5h1.57c1.1 0 2 .9 2 2v2.83c0 1.1-.9 2-2 2h-8.5v-1.5h8.5c.28 0 .5-.22.5-.5z" opacity={.4} />
        <path d="M5.75 21c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75z" />
    </IconBase>
  ))
);

ChartBarRowRegularDuotone.displayName = 'ChartBarRowRegularDuotone';

// Triple export pattern
export { ChartBarRowRegularDuotone, ChartBarRowRegularDuotone as ChartBarRowRegularDuotoneIcon, ChartBarRowRegularDuotone as SiChartBarRowRegularDuotone };
export default ChartBarRowRegularDuotone;
export type { ChartBarRowRegularDuotoneProps };
