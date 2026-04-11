import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankFillProps = Omit<IconBaseProps, 'children'>;

const BankFill = memo(
  forwardRef<SVGSVGElement, BankFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.63 3.2c.27-.12.6-.1.86.07l9 6a.88.88 0 0 1-.49 1.6h-2.13v4.26c1.11.06 2 .98 2 2.12v.88H21a.87.87 0 1 1 0 1.75H3a.88.88 0 0 1 0-1.75h.12v-.88c0-1.13.9-2.06 2.02-2.12L5.12 15v-4.12H3a.88.88 0 0 1-.49-1.6l9-6zM5.25 16.89c-.2 0-.38.16-.38.37v.88h14.25v-.88c0-.2-.16-.37-.37-.37zM6.87 15v.13h2.27L9.12 15v-4.12H6.87zm4 0v.13h2.27l-.02-.13v-4.12h-2.25zm4 0v.13h2.27l-.02-.13v-4.12h-2.25zM12 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BankFill.displayName = 'BankFill';

// Triple export pattern (lucide-react style)
export { BankFill, BankFill as BankFillIcon, BankFill as SiBankFill };
export default BankFill;
export type { BankFillProps };
