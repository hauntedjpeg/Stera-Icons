import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaBoldProps = Omit<IconBaseProps, 'children'>;

const ChartAreaBold = memo(
  forwardRef<SVGSVGElement, ChartAreaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.28 4.31c.28-.3.71-.39 1.1-.24.37.15.62.52.62.93v12.93c0 1.14-.93 2.07-2.07 2.07H2c-.4 0-.76-.24-.92-.6-.16-.37-.08-.8.2-1.09l7.61-8 .08-.07q.28-.23.65-.24.42 0 .72.31l2.61 2.74zm-7.6 10.88q-.3.3-.73.31-.42 0-.72-.31l-2.61-2.74L4.33 18h16.6q.07 0 .07-.07V7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaBold.displayName = 'ChartAreaBold';

// Triple export pattern
export { ChartAreaBold, ChartAreaBold as ChartAreaBoldIcon, ChartAreaBold as SiChartAreaBold };
export default ChartAreaBold;
export type { ChartAreaBoldProps };
