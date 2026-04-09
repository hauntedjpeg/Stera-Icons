import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-fill-duotone" {...props}>
      <path d="M6.75 5C7.44 5 8 5.56 8 6.25v11.88H3.5V6.24C3.5 5.56 4.06 5 4.75 5zM13 8c.69 0 1.25.56 1.25 1.25v8.88h-4.5V9.24C9.75 8.56 10.31 8 11 8zM19.25 12c.69 0 1.25.56 1.25 1.25v4.88H16v-4.88c0-.69.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M21 18.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

ChartBarDescFillDuotone.displayName = 'ChartBarDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescFillDuotone, ChartBarDescFillDuotone as ChartBarDescFillDuotoneIcon, ChartBarDescFillDuotone as SiChartBarDescFillDuotone };
export default ChartBarDescFillDuotone;
export type { ChartBarDescFillDuotoneProps };
