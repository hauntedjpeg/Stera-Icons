import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.92 6c-.14 0-.25.11-.25.25V18h-2V9.75c0-.14-.12-.25-.25-.25h-2.84c-.13 0-.25.11-.25.25V18h-2v-4.75q-.01-.23-.25-.25H5.25c-.14 0-.25.11-.25.25V18H3v-4.75C3 12.01 4 11 5.25 11h2.83l.25.01V9.75c0-1.24 1.01-2.25 2.25-2.25h2.84l.25.01V6.25c0-1.24 1-2.25 2.25-2.25h2.83C19.99 4 21 5 21 6.25V18h-2V6.25c0-.14-.11-.25-.25-.25z" opacity={.4} />
        <path d="M21 18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ChartBarAscBoldDuotone.displayName = 'ChartBarAscBoldDuotone';

// Triple export pattern
export { ChartBarAscBoldDuotone, ChartBarAscBoldDuotone as ChartBarAscBoldDuotoneIcon, ChartBarAscBoldDuotone as SiChartBarAscBoldDuotone };
export default ChartBarAscBoldDuotone;
export type { ChartBarAscBoldDuotoneProps };
