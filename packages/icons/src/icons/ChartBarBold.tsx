import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarBold = memo(
  forwardRef<SVGSVGElement, ChartBarBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.08 4c1.25 0 2.25 1 2.25 2.25v4.76l.25-.01h2.84l.25.01V9.75c0-1.24 1-2.25 2.25-2.25h2.83c1.24 0 2.25 1 2.25 2.25V18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1V6.25C3 5.01 4 4 5.25 4zM5.25 6c-.14 0-.25.11-.25.25V18h3.33V6.25c0-.14-.1-.25-.25-.25zm5.33 7c-.13 0-.25.11-.25.25V18h3.34v-4.75c0-.14-.12-.25-.25-.25zm5.34-3.5q-.23.02-.25.25V18H19V9.75q-.02-.23-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarBold.displayName = 'ChartBarBold';

// Triple export pattern
export { ChartBarBold, ChartBarBold as ChartBarBoldIcon, ChartBarBold as SiChartBarBold };
export default ChartBarBold;
export type { ChartBarBoldProps };
