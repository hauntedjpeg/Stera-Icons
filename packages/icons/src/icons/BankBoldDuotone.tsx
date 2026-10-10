import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankBoldDuotone = memo(
  forwardRef<SVGSVGElement, BankBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.25 17c-.14 0-.25.11-.25.25V18H3v-.75c0-1.16.88-2.11 2-2.24V11h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4.01c1.12.13 2 1.08 2 2.24V18h-2v-.75q-.02-.23-.25-.25zM12 6.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" opacity={0.4} />
        <path d="M21 18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M11.58 3.1c.3-.15.68-.13.97.07l9 6c.37.24.53.7.4 1.12-.12.42-.5.71-.95.71H3c-.44 0-.83-.29-.96-.71-.12-.42.04-.88.4-1.12l9-6zM6.3 9h11.4L12 5.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankBoldDuotone.displayName = 'BankBoldDuotone';

// Triple export pattern
export { BankBoldDuotone, BankBoldDuotone as BankBoldDuotoneIcon, BankBoldDuotone as SiBankBoldDuotone };
export default BankBoldDuotone;
export type { BankBoldDuotoneProps };
