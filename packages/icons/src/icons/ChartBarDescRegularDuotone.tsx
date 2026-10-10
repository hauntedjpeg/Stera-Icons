import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.08 5.75c.28 0 .5.22.5.5v12h1.5v-8.5c0-.28.23-.5.5-.5h2.84c.27 0 .5.22.5.5v8.5h1.5v-5c0-.28.22-.5.5-.5h2.83c.28 0 .5.22.5.5v5h1.5v-5c0-1.1-.9-2-2-2h-2.83q-.27 0-.5.07V9.75c0-1.1-.9-2-2-2h-2.84q-.26 0-.5.07V6.25c0-1.1-.9-2-2-2H5.25c-1.1 0-2 .9-2 2v12h1.5v-12c0-.28.22-.5.5-.5z" opacity={.4} />
        <path d="M3 18.25c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" />
    </IconBase>
  ))
);

ChartBarDescRegularDuotone.displayName = 'ChartBarDescRegularDuotone';

// Triple export pattern
export { ChartBarDescRegularDuotone, ChartBarDescRegularDuotone as ChartBarDescRegularDuotoneIcon, ChartBarDescRegularDuotone as SiChartBarDescRegularDuotone };
export default ChartBarDescRegularDuotone;
export type { ChartBarDescRegularDuotoneProps };
