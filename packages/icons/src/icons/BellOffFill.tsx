import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffFillProps = Omit<IconBaseProps, 'children'>;

const BellOffFill = memo(
  forwardRef<SVGSVGElement, BellOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.13 18.95a4.38 4.38 0 0 1-8.42-.57H5.74a2.88 2.88 0 0 1-2.4-4.47l.92-1.38c.57-.85.87-1.83.87-2.85V9.3q0-.63.1-1.24zm-6.6-.57a2.62 2.62 0 0 0 4.94 0z" clipRule="evenodd" />
        <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24M12 2.13c3.84 0 6.88 3.25 6.88 7.17v.38c0 1.02.3 2 .86 2.85l.92 1.38c.8 1.2.55 2.67-.33 3.59L7.1 4.27A6.7 6.7 0 0 1 12 2.13" />
    </IconBase>
  ))
);

BellOffFill.displayName = 'BellOffFill';

// Triple export pattern (lucide-react style)
export { BellOffFill, BellOffFill as BellOffFillIcon, BellOffFill as SiBellOffFill };
export default BellOffFill;
export type { BellOffFillProps };
