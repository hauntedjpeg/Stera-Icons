import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 17.5c.69 0 1.25.56 1.25 1.25V19c0 .69-.56 1.25-1.25 1.25S3.75 19.69 3.75 19v-.25c0-.69.56-1.25 1.25-1.25M9 14.25c.69 0 1.25.56 1.25 1.25V19c0 .69-.56 1.25-1.25 1.25S7.75 19.69 7.75 19v-3.5c0-.69.56-1.25 1.25-1.25M13 15c.69 0 1.25.56 1.25 1.25V19c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.75c0-.69.56-1.25 1.25-1.25M17 12.75c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25M21 8.75c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M20.14 4.1c.5-.48 1.29-.46 1.76.04.48.5.46 1.29-.04 1.76l-8.1 7.74c-.47.46-1.21.47-1.7.03l-2.31-2.1-5.91 5.36c-.51.46-1.3.42-1.77-.1-.46-.5-.42-1.3.1-1.76l6.74-6.1.1-.08c.47-.36 1.13-.33 1.58.07l2.29 2.07z" />
    </IconBase>
  ))
);

ChartLineBarFillDuotone.displayName = 'ChartLineBarFillDuotone';

// Triple export pattern
export { ChartLineBarFillDuotone, ChartLineBarFillDuotone as ChartLineBarFillDuotoneIcon, ChartLineBarFillDuotone as SiChartLineBarFillDuotone };
export default ChartLineBarFillDuotone;
export type { ChartLineBarFillDuotoneProps };
