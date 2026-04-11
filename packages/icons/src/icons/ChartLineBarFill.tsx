import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBarFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarFill = memo(
  forwardRef<SVGSVGElement, ChartLineBarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 17.5c.69 0 1.25.56 1.25 1.25V19a1.25 1.25 0 0 1-2.5 0v-.25c0-.69.56-1.25 1.25-1.25M9 14.25c.69 0 1.25.56 1.25 1.25V19a1.25 1.25 0 0 1-2.5 0v-3.5c0-.69.56-1.25 1.25-1.25M13 15c.69 0 1.25.56 1.25 1.25V19a1.25 1.25 0 0 1-2.5 0v-2.75c0-.69.56-1.25 1.25-1.25M17 12.75c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 0 1-2.5 0v-5c0-.69.56-1.25 1.25-1.25M21 8.75c.69 0 1.25.56 1.25 1.25v9a1.25 1.25 0 0 1-2.5 0v-9c0-.69.56-1.25 1.25-1.25" />
        <path d="M20.14 4.1a1.25 1.25 0 1 1 1.72 1.8l-8.1 7.74c-.47.46-1.21.47-1.7.03l-2.31-2.1-5.91 5.36a1.25 1.25 0 0 1-1.68-1.86l6.75-6.1.1-.08a1.25 1.25 0 0 1 1.58.07l2.29 2.07z" />
    </IconBase>
  ))
);

ChartLineBarFill.displayName = 'ChartLineBarFill';

// Triple export pattern (lucide-react style)
export { ChartLineBarFill, ChartLineBarFill as ChartLineBarFillIcon, ChartLineBarFill as SiChartLineBarFill };
export default ChartLineBarFill;
export type { ChartLineBarFillProps };
