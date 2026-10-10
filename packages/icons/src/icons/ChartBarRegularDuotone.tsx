import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.92 9.25c-.28 0-.5.22-.5.5v8.5h-1.5v-5c0-.28-.23-.5-.5-.5h-2.84c-.27 0-.5.22-.5.5v5h-1.5v-12c0-.28-.22-.5-.5-.5H5.25c-.28 0-.5.22-.5.5v12h-1.5v-12c0-1.1.9-2 2-2h2.83c1.1 0 2 .9 2 2v5.07q.24-.07.5-.07h2.84q.26 0 .5.07V9.75c0-1.1.9-2 2-2h2.83c1.1 0 2 .9 2 2v8.5h-1.5v-8.5c0-.28-.22-.5-.5-.5z" opacity={.4} />
        <path d="M21 18.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ChartBarRegularDuotone.displayName = 'ChartBarRegularDuotone';

// Triple export pattern
export { ChartBarRegularDuotone, ChartBarRegularDuotone as ChartBarRegularDuotoneIcon, ChartBarRegularDuotone as SiChartBarRegularDuotone };
export default ChartBarRegularDuotone;
export type { ChartBarRegularDuotoneProps };
