import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscBold = memo(
  forwardRef<SVGSVGElement, ChartBarAscBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.75 4C19.99 4 21 5 21 6.25V18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1v-4.75C3 12.01 4 11 5.25 11h2.83l.25.01V9.75c0-1.24 1.01-2.25 2.25-2.25h2.84l.25.01V6.25c0-1.24 1-2.25 2.25-2.25zm-13.5 9c-.14 0-.25.11-.25.25V18h3.33v-4.75q-.01-.23-.25-.25zm5.33-3.5c-.13 0-.25.11-.25.25V18h3.34V9.75c0-.14-.12-.25-.25-.25zM15.92 6c-.14 0-.25.11-.25.25V18H19V6.25c0-.14-.11-.25-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarAscBold.displayName = 'ChartBarAscBold';

// Triple export pattern
export { ChartBarAscBold, ChartBarAscBold as ChartBarAscBoldIcon, ChartBarAscBold as SiChartBarAscBold };
export default ChartBarAscBold;
export type { ChartBarAscBoldProps };
