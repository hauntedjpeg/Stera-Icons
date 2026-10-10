import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.1 2.19.34.04q1.2.18 2.34.65 1.82.75 3.2 2.14 1.4 1.38 2.14 3.2.54 1.3.7 2.69c.12 1.13-.81 1.97-1.82 1.97h-7c-1.04 0-1.87-.84-1.87-1.88V4c0-.94.73-1.82 1.76-1.83z" />
        <path d="M8.75 2.67c.45-.16.95.09 1.11.54s-.08.96-.54 1.12C6.15 5.43 3.88 8.45 3.88 12c0 4.49 3.63 8.12 8.12 8.12 3.55 0 6.57-2.27 7.67-5.44.16-.46.66-.7 1.12-.54.45.16.7.66.54 1.11-1.35 3.86-5.01 6.62-9.33 6.62-5.45 0-9.87-4.42-9.87-9.87 0-4.32 2.76-7.98 6.62-9.33" opacity={.4} />
    </IconBase>
  ))
);

ChartPieFillDuotone.displayName = 'ChartPieFillDuotone';

// Triple export pattern
export { ChartPieFillDuotone, ChartPieFillDuotone as ChartPieFillDuotoneIcon, ChartPieFillDuotone as SiChartPieFillDuotone };
export default ChartPieFillDuotone;
export type { ChartPieFillDuotoneProps };
