import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.92 9.5q-.23.02-.25.25V18h-2v-4.75c0-.14-.12-.25-.25-.25h-2.84c-.13 0-.25.11-.25.25V18h-2V6.25c0-.14-.1-.25-.25-.25H5.25c-.14 0-.25.11-.25.25V18H3V6.25C3 5.01 4 4 5.25 4h2.83c1.25 0 2.25 1 2.25 2.25v4.76l.25-.01h2.84l.25.01V9.75c0-1.24 1-2.25 2.25-2.25h2.83c1.24 0 2.25 1 2.25 2.25V18h-2V9.75q-.02-.23-.25-.25z" opacity={.4} />
        <path d="M21 18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ChartBarBoldDuotone.displayName = 'ChartBarBoldDuotone';

// Triple export pattern
export { ChartBarBoldDuotone, ChartBarBoldDuotone as ChartBarBoldDuotoneIcon, ChartBarBoldDuotone as SiChartBarBoldDuotone };
export default ChartBarBoldDuotone;
export type { ChartBarBoldDuotoneProps };
