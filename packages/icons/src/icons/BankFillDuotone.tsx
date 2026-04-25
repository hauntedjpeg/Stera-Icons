import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankFillDuotone = memo(
  forwardRef<SVGSVGElement, BankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.88 15.13c1.11.07 2 .99 2 2.12v.88H3.13v-.88c0-1.13.88-2.05 2-2.12v-4.26h1.75v4.26h2.25v-4.26h1.74v4.26h2.26v-4.26h1.74v4.26h2.26v-4.26h1.75z" opacity={.4} />
        <path d="M21 18.13a.87.87 0 1 1 0 1.75H3a.88.88 0 0 1 0-1.75z" />
        <path fillRule="evenodd" d="M11.63 3.2c.27-.12.6-.1.85.07l9 6a.88.88 0 0 1-.48 1.6H3a.88.88 0 0 1-.49-1.6l9-6zM12 6.5a1 1 0 0 0-.92.61 1 1 0 0 0 1.22 1.35A1 1 0 0 0 12 6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BankFillDuotone.displayName = 'BankFillDuotone';

// Triple export pattern (lucide-react style)
export { BankFillDuotone, BankFillDuotone as BankFillDuotoneIcon, BankFillDuotone as SiBankFillDuotone };
export default BankFillDuotone;
export type { BankFillDuotoneProps };
