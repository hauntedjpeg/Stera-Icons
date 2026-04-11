import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.75 12c.69 0 1.25.56 1.25 1.25v4.88H3.5v-4.88c0-.69.56-1.25 1.25-1.25zM13 8c.69 0 1.25.56 1.25 1.25v8.88h-4.5V9.24C9.75 8.56 10.31 8 11 8zM19.25 5c.69 0 1.25.56 1.25 1.25v11.88H16V6.24c0-.69.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M21 18.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

ChartBarAscFillDuotone.displayName = 'ChartBarAscFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarAscFillDuotone, ChartBarAscFillDuotone as ChartBarAscFillDuotoneIcon, ChartBarAscFillDuotone as SiChartBarAscFillDuotone };
export default ChartBarAscFillDuotone;
export type { ChartBarAscFillDuotoneProps };
