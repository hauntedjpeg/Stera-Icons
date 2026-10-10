import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartScatterFillProps = Omit<IconBaseProps, 'children'>;

const ChartScatterFill = memo(
  forwardRef<SVGSVGElement, ChartScatterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v10.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H21c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6.2q-.81 0-1.42-.03c-.4-.03-.84-.11-1.26-.32-.6-.32-1.1-.81-1.42-1.42q-.29-.64-.32-1.26-.04-.6-.03-1.42V5c0-.69.56-1.25 1.25-1.25" />
        <path d="M7 13.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 12c.83 0 1.5.67 1.5 1.5S12.83 15 12 15s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M18.5 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15.5 8c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M8.5 6c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9 7 8.33 7 7.5 7.67 6 8.5 6M18.5 4c.83 0 1.5.67 1.5 1.5S19.33 7 18.5 7 17 6.33 17 5.5 17.67 4 18.5 4" />
    </IconBase>
  ))
);

ChartScatterFill.displayName = 'ChartScatterFill';

// Triple export pattern
export { ChartScatterFill, ChartScatterFill as ChartScatterFillIcon, ChartScatterFill as SiChartScatterFill };
export default ChartScatterFill;
export type { ChartScatterFillProps };
