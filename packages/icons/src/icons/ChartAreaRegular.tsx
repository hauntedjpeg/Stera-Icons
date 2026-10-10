import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaRegularProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegular = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.46 4.48c.2-.22.53-.29.82-.18.28.12.47.4.47.7v12.93c0 1-.82 1.82-1.82 1.82H2c-.3 0-.57-.18-.69-.45-.12-.28-.06-.6.15-.82l7.62-8 .05-.05q.21-.18.49-.18.32 0 .54.23l2.8 2.93zM13.5 15.02q-.23.23-.55.23-.31 0-.54-.23l-2.8-2.93-5.86 6.16h17.18c.18 0 .32-.14.32-.32V6.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaRegular.displayName = 'ChartAreaRegular';

// Triple export pattern
export { ChartAreaRegular, ChartAreaRegular as ChartAreaRegularIcon, ChartAreaRegular as SiChartAreaRegular };
export default ChartAreaRegular;
export type { ChartAreaRegularProps };
