import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M3.2 4.04c.53-.44 1.32-.37 1.76.16l4.73 5.67 4.46-2c.47-.22 1.02-.12 1.38.23l.07.07 5.33 6c.46.52.42 1.3-.1 1.76s-1.3.42-1.76-.1l-4.73-5.31-4.5 2.02c-.5.23-1.1.1-1.47-.34L3.04 5.8c-.44-.53-.37-1.32.16-1.76" />
    </IconBase>
  ))
);

ChartLineDescFillDuotone.displayName = 'ChartLineDescFillDuotone';

// Triple export pattern
export { ChartLineDescFillDuotone, ChartLineDescFillDuotone as ChartLineDescFillDuotoneIcon, ChartLineDescFillDuotone as SiChartLineDescFillDuotone };
export default ChartLineDescFillDuotone;
export type { ChartLineDescFillDuotoneProps };
