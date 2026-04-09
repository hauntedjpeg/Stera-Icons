import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuoteFillProps = Omit<IconBaseProps, 'children'>;

const QuoteFill = memo(
  forwardRef<SVGSVGElement, QuoteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="quote-fill" {...props}>
      <path d="M7.5 6.13c2 0 3.38 1.89 3.38 3.87 0 2.33-.39 4.25-1.19 5.63A4.2 4.2 0 0 1 6 17.87a.88.88 0 0 1 0-1.75c.9 0 1.63-.42 2.18-1.37q.27-.47.47-1.1-.53.22-1.15.22c-2 0-3.37-1.89-3.37-3.87S5.49 6.13 7.5 6.13M16.5 6.13c2 0 3.38 1.89 3.38 3.87 0 2.33-.39 4.25-1.19 5.63A4.2 4.2 0 0 1 15 17.87a.88.88 0 0 1 0-1.75c.9 0 1.63-.42 2.18-1.37q.27-.47.47-1.1-.53.22-1.15.22c-2 0-3.37-1.89-3.37-3.87s1.36-3.87 3.37-3.87" />
    </IconBase>
  ))
);

QuoteFill.displayName = 'QuoteFill';

// Triple export pattern (lucide-react style)
export { QuoteFill, QuoteFill as QuoteFillIcon, QuoteFill as SiQuoteFill };
export default QuoteFill;
export type { QuoteFillProps };
