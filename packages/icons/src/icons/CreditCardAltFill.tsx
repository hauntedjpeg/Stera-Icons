import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CreditCardAltFillProps = Omit<IconBaseProps, 'children'>;

const CreditCardAltFill = memo(
  forwardRef<SVGSVGElement, CreditCardAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-alt-fill" {...props}>
      <path fillRule="evenodd" d="M21.88 14.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-3.82h19.75zM6.24 13.13c-.62 0-1.12.5-1.12 1.12v1.5c0 .62.5 1.13 1.12 1.13h3c.62 0 1.13-.5 1.13-1.13v-1.5c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
        <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5l.04.88H2.13q0-.48.04-.87c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

CreditCardAltFill.displayName = 'CreditCardAltFill';

// Triple export pattern (lucide-react style)
export { CreditCardAltFill, CreditCardAltFill as CreditCardAltFillIcon, CreditCardAltFill as SiCreditCardAltFill };
export default CreditCardAltFill;
export type { CreditCardAltFillProps };
