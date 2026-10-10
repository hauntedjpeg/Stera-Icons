import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptFillDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 2.35c.33-.3.84-.3 1.18 0l1.65 1.51 2.04-1.56c.26-.2.62-.23.92-.08.3.14.48.45.48.78v18c0 .34-.19.64-.5.79-.3.14-.65.1-.92-.1l-1.95-1.57-1.95 1.56c-.35.28-.85.25-1.17-.06l-1.45-1.45-1.88 1.51c-.35.28-.85.25-1.17-.06l-1.45-1.45-1.88 1.51c-.27.21-.63.25-.93.1s-.5-.44-.5-.78V3c0-.33.2-.64.5-.78.29-.15.65-.12.91.08l2.04 1.56 1.65-1.5c.34-.31.85-.31 1.18 0L12 3.8zM8.5 13.13c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-4c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 13.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15.5 9.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ReceiptFillDuotone.displayName = 'ReceiptFillDuotone';

// Triple export pattern
export { ReceiptFillDuotone, ReceiptFillDuotone as ReceiptFillDuotoneIcon, ReceiptFillDuotone as SiReceiptFillDuotone };
export default ReceiptFillDuotone;
export type { ReceiptFillDuotoneProps };
