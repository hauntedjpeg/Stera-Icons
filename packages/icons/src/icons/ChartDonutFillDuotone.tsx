import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.42 9.04q.45 1.41.45 2.96c0 2.41-.86 4.62-2.3 6.34l-4.6-4.6q.47-.77.48-1.74 0-.24-.04-.47zM12.88 2.17c3.43.3 6.35 2.35 7.87 5.26l-6 2.49c-.47-.6-1.12-1.06-1.87-1.25z" opacity={0.4} />
        <path d="M11.13 8.67C9.65 9.05 8.55 10.4 8.55 12c0 1.9 1.55 3.45 3.45 3.45q.96-.02 1.74-.48l4.6 4.6c-1.72 1.44-3.93 2.3-6.34 2.3-5.45 0-9.87-4.42-9.87-9.87 0-5.16 3.95-9.4 9-9.83z" />
    </IconBase>
  ))
);

ChartDonutFillDuotone.displayName = 'ChartDonutFillDuotone';

// Triple export pattern
export { ChartDonutFillDuotone, ChartDonutFillDuotone as ChartDonutFillDuotoneIcon, ChartDonutFillDuotone as SiChartDonutFillDuotone };
export default ChartDonutFillDuotone;
export type { ChartDonutFillDuotoneProps };
