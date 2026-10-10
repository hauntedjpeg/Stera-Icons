import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.08 7.5c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-.83c-1.24 0-2.25-1-2.25-2.25v-5.5C3 8.51 4 7.5 5.25 7.5zm-.83 2c-.14 0-.25.11-.25.25v5.5c0 .14.11.25.25.25h.83c.14 0 .25-.11.25-.25v-5.5c0-.14-.11-.25-.25-.25zM18.75 3C19.99 3 21 4 21 5.25v7.5c0 1.24-1 2.25-2.25 2.25h-.83c-1.24 0-2.25-1-2.25-2.25v-7.5c0-1.24 1-2.25 2.25-2.25zm-.83 2c-.14 0-.25.11-.25.25v7.5q.02.23.25.25h.83q.23-.02.25-.25v-7.5c0-.14-.11-.25-.25-.25zM12.42 6c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25h-.84c-1.24 0-2.25-1-2.25-2.25v-3.5c0-1.24 1-2.25 2.25-2.25zm-.84 2q-.23.02-.25.25v3.5q.02.23.25.25h.84q.23-.02.25-.25v-3.5q-.02-.23-.25-.25z" opacity={0.4} />
        <path d="M21 19c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ChartWaterfallXBoldDuotone.displayName = 'ChartWaterfallXBoldDuotone';

// Triple export pattern
export { ChartWaterfallXBoldDuotone, ChartWaterfallXBoldDuotone as ChartWaterfallXBoldDuotoneIcon, ChartWaterfallXBoldDuotone as SiChartWaterfallXBoldDuotone };
export default ChartWaterfallXBoldDuotone;
export type { ChartWaterfallXBoldDuotoneProps };
