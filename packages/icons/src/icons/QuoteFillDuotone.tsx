import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuoteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuoteFillDuotone = memo(
  forwardRef<SVGSVGElement, QuoteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="quote-fill-duotone" {...props}>
      <path d="M16.5 6.13c2 0 3.38 1.89 3.38 3.87 0 2.33-.39 4.25-1.19 5.63A4.2 4.2 0 0 1 15 17.87a.88.88 0 0 1 0-1.75c.9 0 1.63-.42 2.18-1.37q.27-.47.47-1.1-.53.22-1.15.22c-2 0-3.37-1.89-3.37-3.87s1.36-3.87 3.37-3.87" opacity={.4} />
        <path d="M7.5 6.13c2 0 3.38 1.89 3.38 3.87 0 2.33-.39 4.25-1.19 5.63A4.2 4.2 0 0 1 6 17.87a.88.88 0 0 1 0-1.75c.9 0 1.63-.42 2.18-1.37q.27-.47.47-1.1-.53.22-1.15.22c-2 0-3.37-1.89-3.37-3.87S5.49 6.13 7.5 6.13" />
    </IconBase>
  ))
);

QuoteFillDuotone.displayName = 'QuoteFillDuotone';

// Triple export pattern (lucide-react style)
export { QuoteFillDuotone, QuoteFillDuotone as QuoteFillDuotoneIcon, QuoteFillDuotone as SiQuoteFillDuotone };
export default QuoteFillDuotone;
export type { QuoteFillDuotoneProps };
