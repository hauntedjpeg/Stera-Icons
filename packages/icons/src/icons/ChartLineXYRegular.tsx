import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYRegular = memo(
  forwardRef<SVGSVGElement, ChartLineXYRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4.25c.41 0 .75.34.75.75v10.8q0 .83.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H21c.41 0 .75.34.75.75s-.34.75-.75.75H6.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V5c0-.41.34-.75.75-.75" />
        <path d="M19.4 5.55c.25-.33.72-.4 1.05-.15s.4.72.15 1.05l-4.33 5.76c-.23.3-.63.39-.96.21l-3.5-1.88-4.24 4.95c-.27.31-.75.35-1.06.08s-.35-.75-.08-1.06l4.64-5.4.1-.09c.23-.19.56-.23.83-.08l3.45 1.85z" />
    </IconBase>
  ))
);

ChartLineXYRegular.displayName = 'ChartLineXYRegular';

// Triple export pattern
export { ChartLineXYRegular, ChartLineXYRegular as ChartLineXYRegularIcon, ChartLineXYRegular as SiChartLineXYRegular };
export default ChartLineXYRegular;
export type { ChartLineXYRegularProps };
