import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v10.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H21a1.25 1.25 0 1 1 0 2.5H6.2q-.81 0-1.42-.03a3 3 0 0 1-1.26-.32c-.6-.32-1.1-.81-1.42-1.42a3 3 0 0 1-.32-1.26q-.04-.6-.03-1.42V5c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M19 5.25a1.25 1.25 0 0 1 2 1.5l-4.33 5.76c-.37.5-1.05.64-1.6.35l-3.13-1.68-4 4.63a1.25 1.25 0 0 1-1.89-1.62l4.65-5.4.07-.09c.39-.37.98-.46 1.46-.2l3.08 1.65z" />
    </IconBase>
  ))
);

ChartLineXYFillDuotone.displayName = 'ChartLineXYFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYFillDuotone, ChartLineXYFillDuotone as ChartLineXYFillDuotoneIcon, ChartLineXYFillDuotone as SiChartLineXYFillDuotone };
export default ChartLineXYFillDuotone;
export type { ChartLineXYFillDuotoneProps };
