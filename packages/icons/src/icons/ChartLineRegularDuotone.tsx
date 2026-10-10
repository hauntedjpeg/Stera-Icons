import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 18.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M19.42 4.52c.27-.32.74-.36 1.06-.1.32.27.36.74.1 1.06l-5.34 6.4c-.21.26-.57.34-.88.2L9.53 9.91 4.56 15.5c-.27.3-.75.34-1.06.06-.3-.27-.34-.75-.06-1.06l5.33-6 .1-.08c.2-.18.51-.22.77-.1l4.82 2.16z" />
    </IconBase>
  ))
);

ChartLineRegularDuotone.displayName = 'ChartLineRegularDuotone';

// Triple export pattern
export { ChartLineRegularDuotone, ChartLineRegularDuotone as ChartLineRegularDuotoneIcon, ChartLineRegularDuotone as SiChartLineRegularDuotone };
export default ChartLineRegularDuotone;
export type { ChartLineRegularDuotoneProps };
