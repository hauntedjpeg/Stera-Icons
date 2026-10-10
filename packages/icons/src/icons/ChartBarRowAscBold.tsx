import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscBold = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 2c.55 0 1 .45 1 1h4.75C11.99 3 13 4 13 5.25v2.83l-.01.25h1.26c1.24 0 2.25 1.01 2.25 2.25v2.84l-.01.25h1.26c1.24 0 2.25 1 2.25 2.25v2.83c0 1.24-1 2.25-2.25 2.25H6v.1c-.06.5-.48.9-1 .9-.55 0-1-.45-1-1V3c0-.55.45-1 1-1m1 17h11.75q.23-.02.25-.25v-2.83q-.02-.23-.25-.25H6zm0-5.33h8.25c.14 0 .25-.12.25-.25v-2.84c0-.13-.11-.25-.25-.25H6zm0-5.34h4.75q.23-.01.25-.25V5.25c0-.14-.11-.25-.25-.25H6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowAscBold.displayName = 'ChartBarRowAscBold';

// Triple export pattern
export { ChartBarRowAscBold, ChartBarRowAscBold as ChartBarRowAscBoldIcon, ChartBarRowAscBold as SiChartBarRowAscBold };
export default ChartBarRowAscBold;
export type { ChartBarRowAscBoldProps };
