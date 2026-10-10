import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartScatterBoldProps = Omit<IconBaseProps, 'children'>;

const ChartScatterBold = memo(
  forwardRef<SVGSVGElement, ChartScatterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4c.55 0 1 .45 1 1v10.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H21c.55 0 1 .45 1 1s-.45 1-1 1H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5c0-.55.45-1 1-1" />
        <path d="M7 13.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 12c.83 0 1.5.67 1.5 1.5S12.83 15 12 15s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M18.5 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15.5 8c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M8.5 6c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9 7 8.33 7 7.5 7.67 6 8.5 6M18.5 4c.83 0 1.5.67 1.5 1.5S19.33 7 18.5 7 17 6.33 17 5.5 17.67 4 18.5 4" />
    </IconBase>
  ))
);

ChartScatterBold.displayName = 'ChartScatterBold';

// Triple export pattern
export { ChartScatterBold, ChartScatterBold as ChartScatterBoldIcon, ChartScatterBold as SiChartScatterBold };
export default ChartScatterBold;
export type { ChartScatterBoldProps };
