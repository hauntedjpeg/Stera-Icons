import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXYFill = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXYFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 2.75c.69 0 1.25.56 1.25 1.25v12.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H22c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5.2q-.81 0-1.42-.03c-.4-.03-.84-.11-1.26-.32-.6-.32-1.1-.81-1.42-1.42q-.29-.64-.32-1.26-.04-.6-.03-1.42V4c0-.69.56-1.25 1.25-1.25" />
        <path d="M7 10.75c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25S5.75 15.69 5.75 15v-3c0-.69.56-1.25 1.25-1.25M11 6.75c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25S9.75 13.69 9.75 13V8c0-.69.56-1.25 1.25-1.25M19 1.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25S17.75 9.69 17.75 9V3c0-.69.56-1.25 1.25-1.25M15 3.75c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25S13.75 8.69 13.75 8V5c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChartWaterfallXYFill.displayName = 'ChartWaterfallXYFill';

// Triple export pattern
export { ChartWaterfallXYFill, ChartWaterfallXYFill as ChartWaterfallXYFillIcon, ChartWaterfallXYFill as SiChartWaterfallXYFill };
export default ChartWaterfallXYFill;
export type { ChartWaterfallXYFillProps };
