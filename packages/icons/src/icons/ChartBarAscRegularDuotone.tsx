import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.92 5.75c-.28 0-.5.22-.5.5v12h-1.5v-8.5c0-.28-.23-.5-.5-.5h-2.84c-.27 0-.5.22-.5.5v8.5h-1.5v-5c0-.28-.22-.5-.5-.5H5.25c-.28 0-.5.22-.5.5v5h-1.5v-5c0-1.1.9-2 2-2h2.83q.26 0 .5.07V9.75c0-1.1.9-2 2-2h2.84q.26 0 .5.07V6.25c0-1.1.9-2 2-2h2.83c1.1 0 2 .9 2 2v12h-1.5v-12c0-.28-.22-.5-.5-.5z" opacity={.4} />
        <path d="M21 18.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ChartBarAscRegularDuotone.displayName = 'ChartBarAscRegularDuotone';

// Triple export pattern
export { ChartBarAscRegularDuotone, ChartBarAscRegularDuotone as ChartBarAscRegularDuotoneIcon, ChartBarAscRegularDuotone as SiChartBarAscRegularDuotone };
export default ChartBarAscRegularDuotone;
export type { ChartBarAscRegularDuotoneProps };
