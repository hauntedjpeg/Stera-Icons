import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.25 8.08c0 .28-.22.5-.5.5h-12v1.5h8.5c.28 0 .5.23.5.5v2.84c0 .27-.22.5-.5.5h-8.5v1.5h5c.28 0 .5.22.5.5v2.83c0 .28-.22.5-.5.5h-5v1.5h5c1.1 0 2-.9 2-2v-2.83q0-.27-.07-.5h1.57c1.1 0 2-.9 2-2v-2.84q0-.26-.07-.5h1.57c1.1 0 2-.9 2-2V5.25c0-1.1-.9-2-2-2h-12v1.5h12c.28 0 .5.22.5.5z" opacity={.4} />
        <path d="M5.75 3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18c0 .41.34.75.75.75s.75-.34.75-.75z" />
    </IconBase>
  ))
);

ChartBarRowDescRegularDuotone.displayName = 'ChartBarRowDescRegularDuotone';

// Triple export pattern
export { ChartBarRowDescRegularDuotone, ChartBarRowDescRegularDuotone as ChartBarRowDescRegularDuotoneIcon, ChartBarRowDescRegularDuotone as SiChartBarRowDescRegularDuotone };
export default ChartBarRowDescRegularDuotone;
export type { ChartBarRowDescRegularDuotoneProps };
