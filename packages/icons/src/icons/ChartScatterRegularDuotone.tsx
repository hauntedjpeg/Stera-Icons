import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartScatterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartScatterRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartScatterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4.25c.41 0 .75.34.75.75v10.8q0 .83.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H21c.41 0 .75.34.75.75s-.34.75-.75.75H6.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M7 13.75c.69 0 1.25.56 1.25 1.25S7.69 16.25 7 16.25 5.75 15.69 5.75 15s.56-1.25 1.25-1.25M12 12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M18.5 12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M15.5 8.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M8.5 6.25c.69 0 1.25.56 1.25 1.25S9.19 8.75 8.5 8.75 7.25 8.19 7.25 7.5s.56-1.25 1.25-1.25M18.5 4.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChartScatterRegularDuotone.displayName = 'ChartScatterRegularDuotone';

// Triple export pattern
export { ChartScatterRegularDuotone, ChartScatterRegularDuotone as ChartScatterRegularDuotoneIcon, ChartScatterRegularDuotone as SiChartScatterRegularDuotone };
export default ChartScatterRegularDuotone;
export type { ChartScatterRegularDuotoneProps };
