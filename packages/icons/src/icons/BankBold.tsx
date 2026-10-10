import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankBoldProps = Omit<IconBaseProps, 'children'>;

const BankBold = memo(
  forwardRef<SVGSVGElement, BankBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
        <path fillRule="evenodd" d="M11.58 3.1c.3-.15.68-.13.97.07l9 6c.37.24.53.7.4 1.12-.12.42-.5.71-.95.71h-2v4.01c1.12.13 2 1.08 2 2.24V18h.1c.5.06.9.48.9 1 0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1 0-.52.4-.94.9-1H3v-.75c0-1.16.88-2.11 2-2.24V11H3c-.44 0-.83-.29-.96-.71-.12-.42.04-.88.4-1.12l9-6zM5.25 17q-.23.02-.25.25V18h14v-.75q-.02-.23-.25-.25zM7 15h2v-4H7zm4 0h2v-4h-2zm4 0h2v-4h-2zM6.3 9h11.4L12 5.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankBold.displayName = 'BankBold';

// Triple export pattern
export { BankBold, BankBold as BankBoldIcon, BankBold as SiBankBold };
export default BankBold;
export type { BankBoldProps };
