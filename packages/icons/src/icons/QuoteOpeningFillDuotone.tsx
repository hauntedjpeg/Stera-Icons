import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuoteOpeningFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuoteOpeningFillDuotone = memo(
  forwardRef<SVGSVGElement, QuoteOpeningFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 6.13a.88.88 0 0 1 0 1.75c-.9 0-1.63.42-2.18 1.37q-.27.47-.48 1.1.54-.21 1.16-.22c2 0 3.38 1.89 3.38 3.87s-1.37 3.88-3.38 3.88-3.37-1.9-3.37-3.88c0-2.33.38-4.25 1.18-5.63A4.2 4.2 0 0 1 18 6.13" opacity={.4} />
        <path d="M9 6.13a.87.87 0 1 1 0 1.75c-.9 0-1.63.42-2.18 1.37q-.27.47-.48 1.1.54-.21 1.16-.22c2 0 3.38 1.89 3.38 3.87S9.5 17.88 7.5 17.88 4.13 15.98 4.13 14c0-2.33.38-4.25 1.18-5.63A4.2 4.2 0 0 1 9 6.13" />
    </IconBase>
  ))
);

QuoteOpeningFillDuotone.displayName = 'QuoteOpeningFillDuotone';

// Triple export pattern (lucide-react style)
export { QuoteOpeningFillDuotone, QuoteOpeningFillDuotone as QuoteOpeningFillDuotoneIcon, QuoteOpeningFillDuotone as SiQuoteOpeningFillDuotone };
export default QuoteOpeningFillDuotone;
export type { QuoteOpeningFillDuotoneProps };
