import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentBold = memo(
  forwardRef<SVGSVGElement, CurrencyCentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c.55 0 1 .45 1 1v2.52q.36.02.72.08c1.49.25 2.86.93 3.95 1.97.4.38.42 1.01.04 1.41s-1.02.42-1.42.04c-.8-.76-1.8-1.27-2.9-1.45L13 6.52v10.96q.5-.05 1-.19c1.06-.3 2-.91 2.71-1.75.36-.43.99-.48 1.41-.13.43.36.48.99.13 1.41-.97 1.15-2.26 1.99-3.7 2.4q-.77.21-1.55.26V22c0 .55-.45 1-1 1s-1-.45-1-1v-2.65q-.44-.1-.87-.23c-1.42-.48-2.67-1.37-3.59-2.56-.91-1.2-1.44-2.64-1.53-4.14-.08-1.5.29-3 1.06-4.28.78-1.3 1.92-2.32 3.28-2.95q.8-.36 1.65-.54V2c0-.55.45-1 1-1m-1 5.7q-.41.14-.8.3c-1 .47-1.85 1.22-2.41 2.17-.57.94-.84 2.04-.78 3.14s.45 2.15 1.12 3.03 1.59 1.53 2.63 1.88l.24.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentBold.displayName = 'CurrencyCentBold';

// Triple export pattern
export { CurrencyCentBold, CurrencyCentBold as CurrencyCentBoldIcon, CurrencyCentBold as SiCurrencyCentBold };
export default CurrencyCentBold;
export type { CurrencyCentBoldProps };
