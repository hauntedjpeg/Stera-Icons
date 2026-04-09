import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-fill-duotone" {...props}>
      <path d="M6.75 5C7.44 5 8 5.56 8 6.25v11.88H3.5V6.24C3.5 5.56 4.06 5 4.75 5zM13 12c.69 0 1.25.56 1.25 1.25v4.88h-4.5v-4.88c0-.69.56-1.25 1.25-1.25zM19.25 8c.69 0 1.25.56 1.25 1.25v8.88H16V9.24c0-.69.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M21 18.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

ChartBarFillDuotone.displayName = 'ChartBarFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarFillDuotone, ChartBarFillDuotone as ChartBarFillDuotoneIcon, ChartBarFillDuotone as SiChartBarFillDuotone };
export default ChartBarFillDuotone;
export type { ChartBarFillDuotoneProps };
