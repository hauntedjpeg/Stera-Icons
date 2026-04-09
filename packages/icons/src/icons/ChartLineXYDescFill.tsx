import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescFill = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-desc-fill" {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v10.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H21a1.25 1.25 0 1 1 0 2.5H6.2q-.81 0-1.42-.03a3 3 0 0 1-1.26-.32c-.6-.32-1.1-.81-1.42-1.42a3 3 0 0 1-.32-1.26q-.04-.6-.03-1.42V5c0-.69.56-1.25 1.25-1.25" />
        <path d="M6.25 5c.55-.41 1.33-.3 1.75.25l3.69 4.9 3.08-1.65a1.25 1.25 0 0 1 1.46.2l.07.09 4.65 5.4a1.25 1.25 0 0 1-1.9 1.62l-3.99-4.63-3.14 1.68c-.54.3-1.21.14-1.59-.35L6 6.75C5.6 6.2 5.7 5.42 6.25 5" />
    </IconBase>
  ))
);

ChartLineXYDescFill.displayName = 'ChartLineXYDescFill';

// Triple export pattern (lucide-react style)
export { ChartLineXYDescFill, ChartLineXYDescFill as ChartLineXYDescFillIcon, ChartLineXYDescFill as SiChartLineXYDescFill };
export default ChartLineXYDescFill;
export type { ChartLineXYDescFillProps };
