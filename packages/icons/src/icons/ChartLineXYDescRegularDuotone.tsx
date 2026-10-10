import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4.25c.41 0 .75.34.75.75v10.8q0 .83.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H21c.41 0 .75.34.75.75s-.34.75-.75.75H6.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M6.55 5.4c.33-.25.8-.18 1.05.15l3.95 5.24L15 8.94c.27-.15.6-.11.83.08l.1.1 4.64 5.39c.27.31.23.79-.08 1.06-.32.27-.79.23-1.06-.08l-4.25-4.95-3.5 1.88c-.32.18-.72.09-.95-.2L6.4 6.44c-.25-.33-.18-.8.15-1.05" />
    </IconBase>
  ))
);

ChartLineXYDescRegularDuotone.displayName = 'ChartLineXYDescRegularDuotone';

// Triple export pattern
export { ChartLineXYDescRegularDuotone, ChartLineXYDescRegularDuotone as ChartLineXYDescRegularDuotoneIcon, ChartLineXYDescRegularDuotone as SiChartLineXYDescRegularDuotone };
export default ChartLineXYDescRegularDuotone;
export type { ChartLineXYDescRegularDuotoneProps };
