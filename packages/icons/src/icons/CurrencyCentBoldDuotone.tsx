import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 19.35q1 .2 2 .13V22c0 .55-.45 1-1 1s-1-.45-1-1zM11 6.7q.99-.27 2-.18v10.96q-1.01.1-2-.19zM12 1c.55 0 1 .45 1 1v2.52q-1-.07-2 .13V2c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M9.35 5.2c1.37-.64 2.9-.85 4.37-.6 1.49.25 2.86.93 3.95 1.97.4.38.42 1.01.04 1.41s-1.02.42-1.42.04c-.8-.76-1.8-1.27-2.9-1.45-1.08-.18-2.2-.03-3.2.44S8.35 8.22 7.8 9.17c-.57.94-.84 2.04-.78 3.14s.45 2.15 1.12 3.03 1.59 1.53 2.63 1.88c1.05.35 2.18.37 3.24.07s2-.91 2.71-1.75c.36-.43.99-.48 1.41-.13.43.36.48.99.13 1.41-.97 1.15-2.26 1.99-3.7 2.4s-3 .37-4.42-.1c-1.42-.48-2.67-1.37-3.59-2.56-.91-1.2-1.44-2.64-1.53-4.14-.08-1.5.29-3 1.06-4.28.78-1.3 1.92-2.32 3.28-2.95" />
    </IconBase>
  ))
);

CurrencyCentBoldDuotone.displayName = 'CurrencyCentBoldDuotone';

// Triple export pattern
export { CurrencyCentBoldDuotone, CurrencyCentBoldDuotone as CurrencyCentBoldDuotoneIcon, CurrencyCentBoldDuotone as SiCurrencyCentBoldDuotone };
export default CurrencyCentBoldDuotone;
export type { CurrencyCentBoldDuotoneProps };
