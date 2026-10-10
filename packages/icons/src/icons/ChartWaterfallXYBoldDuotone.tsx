import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXYBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXYBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXYBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 3c.55 0 1 .45 1 1v12.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H22c.55 0 1 .45 1 1s-.45 1-1 1H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8V4c0-.55.45-1 1-1" opacity={.4} />
        <path d="M6 12c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1M10.67 7c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1-.56 0-1-.45-1-1V8c0-.55.44-1 1-1M20 2c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1M15.33 4c.56 0 1 .45 1 1v3c0 .55-.44 1-1 1-.55 0-1-.45-1-1V5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ChartWaterfallXYBoldDuotone.displayName = 'ChartWaterfallXYBoldDuotone';

// Triple export pattern
export { ChartWaterfallXYBoldDuotone, ChartWaterfallXYBoldDuotone as ChartWaterfallXYBoldDuotoneIcon, ChartWaterfallXYBoldDuotone as SiChartWaterfallXYBoldDuotone };
export default ChartWaterfallXYBoldDuotone;
export type { ChartWaterfallXYBoldDuotoneProps };
