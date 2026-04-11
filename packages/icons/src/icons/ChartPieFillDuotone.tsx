import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.1 2.19.34.04a9.9 9.9 0 0 1 8.37 8.68A1.8 1.8 0 0 1 20 12.88h-7A1.9 1.9 0 0 1 11.13 11V4c0-.94.73-1.82 1.76-1.83z" />
        <path d="M8.75 2.67a.88.88 0 0 1 .57 1.66 8.13 8.13 0 1 0 10.35 10.35.88.88 0 0 1 1.66.57A9.88 9.88 0 1 1 8.75 2.67" opacity={.4} />
    </IconBase>
  ))
);

ChartPieFillDuotone.displayName = 'ChartPieFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieFillDuotone, ChartPieFillDuotone as ChartPieFillDuotoneIcon, ChartPieFillDuotone as SiChartPieFillDuotone };
export default ChartPieFillDuotone;
export type { ChartPieFillDuotoneProps };
