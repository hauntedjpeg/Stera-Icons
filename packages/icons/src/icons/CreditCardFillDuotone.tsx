import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CreditCardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CreditCardFillDuotone = memo(
  forwardRef<SVGSVGElement, CreditCardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M21.88 14.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-3.82h19.75zm-11.38.43a.88.88 0 0 0 0 1.74h1a.88.88 0 0 0 0-1.75zm4 0a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5l.04.88H2.13q0-.48.04-.87c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={0.4} />
        <path d="M11.5 14.63a.88.88 0 0 1 0 1.74h-1a.88.88 0 0 1 0-1.75zM17.5 14.63a.88.88 0 0 1 0 1.74h-3a.88.88 0 0 1 0-1.75zM21.88 10.38H2.13V8.62h19.75z" />
    </IconBase>
  ))
);

CreditCardFillDuotone.displayName = 'CreditCardFillDuotone';

// Triple export pattern (lucide-react style)
export { CreditCardFillDuotone, CreditCardFillDuotone as CreditCardFillDuotoneIcon, CreditCardFillDuotone as SiCreditCardFillDuotone };
export default CreditCardFillDuotone;
export type { CreditCardFillDuotoneProps };
