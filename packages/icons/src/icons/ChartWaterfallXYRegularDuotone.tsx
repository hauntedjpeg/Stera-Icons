import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXYRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXYRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXYRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 3.25c.41 0 .75.34.75.75v12.8q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H22c.41 0 .75.34.75.75s-.34.75-.75.75H5.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M6 12.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75M10.67 7.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75V8c0-.41.33-.75.75-.75M20 2.25c.42 0 .75.34.75.75v6c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75M15.33 4.25c.42 0 .75.34.75.75v3c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartWaterfallXYRegularDuotone.displayName = 'ChartWaterfallXYRegularDuotone';

// Triple export pattern
export { ChartWaterfallXYRegularDuotone, ChartWaterfallXYRegularDuotone as ChartWaterfallXYRegularDuotoneIcon, ChartWaterfallXYRegularDuotone as SiChartWaterfallXYRegularDuotone };
export default ChartWaterfallXYRegularDuotone;
export type { ChartWaterfallXYRegularDuotoneProps };
