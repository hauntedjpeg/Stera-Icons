import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffFillDuotone = memo(
  forwardRef<SVGSVGElement, BellOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.14 18.38h-.85a4.38 4.38 0 0 1-8.58 0H5.74a2.88 2.88 0 0 1-2.4-4.47l.92-1.38c.57-.85.87-1.83.87-2.85V9.3q0-1.33.43-2.5zm-7.61 0a2.62 2.62 0 0 0 4.94 0z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 2.13c3.84 0 6.88 3.25 6.88 7.17v.38c0 1.02.3 2 .86 2.85l.92 1.38a2.88 2.88 0 0 1-1.27 4.24l-13-13A6.8 6.8 0 0 1 12 2.12" opacity={0.4} />
        <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

BellOffFillDuotone.displayName = 'BellOffFillDuotone';

// Triple export pattern (lucide-react style)
export { BellOffFillDuotone, BellOffFillDuotone as BellOffFillDuotoneIcon, BellOffFillDuotone as SiBellOffFillDuotone };
export default BellOffFillDuotone;
export type { BellOffFillDuotoneProps };
