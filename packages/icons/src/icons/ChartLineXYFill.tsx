import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYFill = memo(
  forwardRef<SVGSVGElement, ChartLineXYFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v10.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02H21c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6.2q-.81 0-1.42-.03c-.4-.03-.84-.11-1.26-.32-.6-.32-1.1-.81-1.42-1.42q-.29-.64-.32-1.26-.04-.6-.03-1.42V5c0-.69.56-1.25 1.25-1.25" />
        <path d="M19 5.25c.42-.55 1.2-.66 1.75-.25s.66 1.2.25 1.75l-4.33 5.76c-.37.5-1.05.64-1.6.35l-3.13-1.68-4 4.63c-.44.53-1.23.59-1.75.14-.53-.45-.59-1.24-.14-1.76l4.65-5.4.07-.08c.39-.38.98-.47 1.46-.21l3.08 1.65z" />
    </IconBase>
  ))
);

ChartLineXYFill.displayName = 'ChartLineXYFill';

// Triple export pattern
export { ChartLineXYFill, ChartLineXYFill as ChartLineXYFillIcon, ChartLineXYFill as SiChartLineXYFill };
export default ChartLineXYFill;
export type { ChartLineXYFillProps };
