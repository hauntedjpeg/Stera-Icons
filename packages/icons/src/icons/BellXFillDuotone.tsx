import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellXFillDuotone = memo(
  forwardRef<SVGSVGElement, BellXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-x-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13c3.84 0 6.88 3.25 6.88 7.17v.38c0 1.02.3 2 .86 2.85l.92 1.38a2.88 2.88 0 0 1-2.4 4.47H16.3a4.38 4.38 0 0 1-8.58 0H5.74a2.88 2.88 0 0 1-2.4-4.47l.92-1.38c.57-.85.87-1.83.87-2.85V9.3c0-3.92 3.03-7.17 6.87-7.18M9.53 18.38a2.62 2.62 0 0 0 4.94 0zm5.09-10.5a.9.9 0 0 0-1.24 0L12 9.26l-1.38-1.38a.88.88 0 0 0-1.24 1.24l1.38 1.38-1.38 1.38a.88.88 0 0 0 1.24 1.24L12 11.74l1.38 1.38a.88.88 0 0 0 1.24-1.24l-1.38-1.38 1.38-1.38a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M13.38 7.88a.88.88 0 0 1 1.24 1.24l-1.38 1.38 1.38 1.38a.88.88 0 0 1-1.24 1.24L12 11.74l-1.38 1.38a.88.88 0 0 1-1.24-1.24l1.38-1.38-1.38-1.38a.88.88 0 0 1 1.24-1.24L12 9.26z" />
    </IconBase>
  ))
);

BellXFillDuotone.displayName = 'BellXFillDuotone';

// Triple export pattern (lucide-react style)
export { BellXFillDuotone, BellXFillDuotone as BellXFillDuotoneIcon, BellXFillDuotone as SiBellXFillDuotone };
export default BellXFillDuotone;
export type { BellXFillDuotoneProps };
