import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarFill = memo(
  forwardRef<SVGSVGElement, ChartBarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-fill" {...props}>
      <path d="M6.75 5C7.44 5 8 5.56 8 6.25v11.88h1.75v-4.88c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.88H16V9.24c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v8.88h.5a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75h.5V6.24C3.5 5.56 4.06 5 4.75 5z" />
    </IconBase>
  ))
);

ChartBarFill.displayName = 'ChartBarFill';

// Triple export pattern (lucide-react style)
export { ChartBarFill, ChartBarFill as ChartBarFillIcon, ChartBarFill as SiChartBarFill };
export default ChartBarFill;
export type { ChartBarFillProps };
