import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaRegularProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegular = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.46 4.48a.75.75 0 0 1 1.29.52v12.93c0 1-.82 1.82-1.82 1.82H2a.75.75 0 0 1-.54-1.27l7.62-8 .05-.05a.75.75 0 0 1 1.03.05l2.8 2.93zM13.5 15.02a.75.75 0 0 1-1.1 0l-2.78-2.93-5.87 6.16h17.18c.18 0 .32-.14.32-.32V6.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaRegular.displayName = 'ChartAreaRegular';

// Triple export pattern (lucide-react style)
export { ChartAreaRegular, ChartAreaRegular as ChartAreaRegularIcon, ChartAreaRegular as SiChartAreaRegular };
export default ChartAreaRegular;
export type { ChartAreaRegularProps };
