import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptFillProps = Omit<IconBaseProps, 'children'>;

const ReceiptFill = memo(
  forwardRef<SVGSVGElement, ReceiptFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-fill" {...props}>
      <path fillRule="evenodd" d="M13.6 2.35c.33-.3.84-.3 1.18 0l1.65 1.51 2.04-1.56a.88.88 0 0 1 1.4.7v18a.88.88 0 0 1-1.42.68l-1.95-1.56-1.95 1.56a.9.9 0 0 1-1.17-.06l-1.45-1.45-1.88 1.51a.9.9 0 0 1-1.17-.06l-1.45-1.45-1.88 1.51A.88.88 0 0 1 4.13 21V3a.88.88 0 0 1 1.4-.7l2.04 1.56 1.65-1.5c.34-.31.85-.31 1.18 0L12 3.8zM8.5 13.12a.88.88 0 0 0 0 1.75h7a.88.88 0 0 0 0-1.75zm0-4a.88.88 0 0 0 0 1.75h7a.88.88 0 0 0 0-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptFill.displayName = 'ReceiptFill';

// Triple export pattern (lucide-react style)
export { ReceiptFill, ReceiptFill as ReceiptFillIcon, ReceiptFill as SiReceiptFill };
export default ReceiptFill;
export type { ReceiptFillProps };
