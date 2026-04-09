import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartScatterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartScatterFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartScatterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-scatter-fill-duotone" {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v10.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H21a1.25 1.25 0 1 1 0 2.5H6.2q-.81 0-1.42-.03a3 3 0 0 1-1.26-.32c-.6-.32-1.1-.81-1.42-1.42a3 3 0 0 1-.32-1.26q-.04-.6-.03-1.42V5c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M7 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ChartScatterFillDuotone.displayName = 'ChartScatterFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartScatterFillDuotone, ChartScatterFillDuotone as ChartScatterFillDuotoneIcon, ChartScatterFillDuotone as SiChartScatterFillDuotone };
export default ChartScatterFillDuotone;
export type { ChartScatterFillDuotoneProps };
