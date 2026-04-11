import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptFillDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 2.35c.33-.3.84-.3 1.18 0l1.65 1.51 2.04-1.56a.88.88 0 0 1 1.4.7v18a.88.88 0 0 1-1.42.68l-1.95-1.56-1.95 1.56a.9.9 0 0 1-1.17-.06l-1.45-1.45-1.88 1.51a.9.9 0 0 1-1.17-.06l-1.45-1.45-1.88 1.51A.88.88 0 0 1 4.13 21V3a.88.88 0 0 1 1.4-.7l2.04 1.56 1.65-1.5c.34-.31.85-.31 1.18 0L12 3.8zM8.5 13.13a.88.88 0 0 0 0 1.75h7a.88.88 0 0 0 0-1.75zm0-4a.88.88 0 0 0 0 1.75h7a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 13.13a.88.88 0 0 1 0 1.74h-7a.88.88 0 0 1 0-1.74zM15.5 9.13a.88.88 0 0 1 0 1.74h-7a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

ReceiptFillDuotone.displayName = 'ReceiptFillDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptFillDuotone, ReceiptFillDuotone as ReceiptFillDuotoneIcon, ReceiptFillDuotone as SiReceiptFillDuotone };
export default ReceiptFillDuotone;
export type { ReceiptFillDuotoneProps };
