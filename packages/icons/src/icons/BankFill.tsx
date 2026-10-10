import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankFillProps = Omit<IconBaseProps, 'children'>;

const BankFill = memo(
  forwardRef<SVGSVGElement, BankFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.63 3.2c.27-.12.6-.1.85.07l9 6c.33.22.47.62.36.98-.11.37-.45.63-.84.63h-2.13v4.25c1.11.06 2 .98 2 2.12v.88H21c.48 0 .87.39.87.87s-.39.88-.87.88H3c-.48 0-.88-.4-.88-.88s.4-.87.88-.87h.12v-.88c0-1.13.9-2.06 2.02-2.12L5.12 15v-4.12H3c-.39 0-.73-.26-.84-.63-.11-.36.03-.76.35-.98l9-6zM5.25 16.89c-.2 0-.38.16-.38.37v.88h14.25v-.88c0-.2-.16-.37-.37-.37zM6.87 15v.13h2.27L9.12 15v-4.12H6.87zm4 0v.13h2.27l-.02-.13v-4.12h-2.25zm4 0v.13h2.27l-.02-.13v-4.12h-2.25zM12 6.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

BankFill.displayName = 'BankFill';

// Triple export pattern
export { BankFill, BankFill as BankFillIcon, BankFill as SiBankFill };
export default BankFill;
export type { BankFillProps };
