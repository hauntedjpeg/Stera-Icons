import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltBoldProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltBold = memo(
  forwardRef<SVGSVGElement, ChartCandleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4 5c.55 0 1 .45 1 1v3.01c1.12.13 2 1.08 2 2.24v5.5c0 1.16-.88 2.11-2 2.23V20c0 .55-.45 1-1 1s-1-.45-1-1v-1.02c-1.12-.12-2-1.07-2-2.23v-5.5c0-1.16.88-2.11 2-2.24V6c0-.55.45-1 1-1m-.75 6c-.14 0-.25.11-.25.25v5.5c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-5.5c0-.14-.11-.25-.25-.25zM20 3c.55 0 1 .45 1 1v1.01c1.12.13 2 1.08 2 2.24v8.5c0 1.16-.88 2.11-2 2.23V19c0 .55-.45 1-1 1s-1-.45-1-1v-1.02c-1.12-.12-2-1.07-2-2.23v-8.5c0-1.16.88-2.11 2-2.24V4c0-.55.45-1 1-1m-.75 4c-.14 0-.25.11-.25.25v8.5q.02.23.25.25h1.5q.23-.02.25-.25v-8.5c0-.14-.11-.25-.25-.25zM12 5c.55 0 1 .45 1 1v1.01c1.12.13 2 1.08 2 2.24v3.5c0 1.16-.88 2.11-2 2.23V18c0 .55-.45 1-1 1s-1-.45-1-1v-3.02c-1.12-.12-2-1.07-2-2.23v-3.5c0-1.16.88-2.11 2-2.24V6c0-.55.45-1 1-1m-.75 4q-.23.02-.25.25v3.5q.02.23.25.25h1.5q.23-.02.25-.25v-3.5q-.02-.23-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleAltBold.displayName = 'ChartCandleAltBold';

// Triple export pattern
export { ChartCandleAltBold, ChartCandleAltBold as ChartCandleAltBoldIcon, ChartCandleAltBold as SiChartCandleAltBold };
export default ChartCandleAltBold;
export type { ChartCandleAltBoldProps };
