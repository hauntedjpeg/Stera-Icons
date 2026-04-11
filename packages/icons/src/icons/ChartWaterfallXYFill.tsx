import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXYFill = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXYFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 2.75c.69 0 1.25.56 1.25 1.25v12.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H22a1.25 1.25 0 1 1 0 2.5H5.2q-.81 0-1.42-.03a3 3 0 0 1-1.26-.32c-.6-.32-1.1-.81-1.42-1.42a3 3 0 0 1-.32-1.26q-.04-.6-.03-1.42V4c0-.69.56-1.25 1.25-1.25" />
        <path d="M7 10.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0v-3c0-.69.56-1.25 1.25-1.25M11 6.75c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 1 1-2.5 0V8c0-.69.56-1.25 1.25-1.25M19 1.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0V3c0-.69.56-1.25 1.25-1.25M15 3.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0V5c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChartWaterfallXYFill.displayName = 'ChartWaterfallXYFill';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXYFill, ChartWaterfallXYFill as ChartWaterfallXYFillIcon, ChartWaterfallXYFill as SiChartWaterfallXYFill };
export default ChartWaterfallXYFill;
export type { ChartWaterfallXYFillProps };
