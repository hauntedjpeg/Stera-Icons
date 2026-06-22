import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibBoldProps = Omit<IconBaseProps, 'children'>;

const PenNibBold = memo(
  forwardRef<SVGSVGElement, PenNibBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.75 2a1 1 0 0 1 .8.41c2 2.73 4.1 6.22 5 9.31.44 1.54.63 3.1.23 4.47a4.3 4.3 0 0 1-2.4 2.78v.78c0 1.24-1.01 2.25-2.25 2.25H8.87c-1.24 0-2.25-1-2.25-2.25v-.78a4.3 4.3 0 0 1-2.4-2.78 8 8 0 0 1 .23-4.47c.9-3.1 3-6.58 5-9.3a1 1 0 0 1 .8-.42zm-2.99 2c-1.84 2.59-3.63 5.66-4.39 8.28a6.3 6.3 0 0 0-.23 3.35c.22.76.72 1.37 1.8 1.72a1 1 0 0 1 .68.95v1.45c0 .14.12.25.25.25h6.26c.13 0 .25-.11.25-.25V18.3a1 1 0 0 1 .68-.95c1.08-.35 1.58-.96 1.8-1.72q.36-1.26-.23-3.35c-.76-2.62-2.55-5.7-4.4-8.28H13v5.65a3.5 3.5 0 1 1-2 0V4zM12 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibBold.displayName = 'PenNibBold';

// Triple export pattern (lucide-react style)
export { PenNibBold, PenNibBold as PenNibBoldIcon, PenNibBold as SiPenNibBold };
export default PenNibBold;
export type { PenNibBoldProps };
