import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroBold = memo(
  forwardRef<SVGSVGElement, CurrencyEuroBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3c.55 0 1 .45 1 1s-.45 1-1 1h-2.25q-2.87-.01-4.2 1.43c-.54.58-.98 1.4-1.25 2.57H15c.55 0 1 .45 1 1s-.45 1-1 1H9.03Q9 11.48 9 12t.03 1H15c.55 0 1 .45 1 1s-.45 1-1 1H9.3c.27 1.16.71 1.99 1.25 2.57Q11.9 19 14.75 19H17c.55 0 1 .45 1 1s-.45 1-1 1h-2.25c-2.22 0-4.23-.54-5.66-2.07Q7.72 17.47 7.26 15H5c-.55 0-1-.45-1-1s.45-1 1-1h2.03Q7 12.51 7 12t.03-1H5c-.55 0-1-.45-1-1s.45-1 1-1h2.26q.46-2.47 1.83-3.93C10.52 3.54 12.53 3 14.75 3z" />
    </IconBase>
  ))
);

CurrencyEuroBold.displayName = 'CurrencyEuroBold';

// Triple export pattern
export { CurrencyEuroBold, CurrencyEuroBold as CurrencyEuroBoldIcon, CurrencyEuroBold as SiCurrencyEuroBold };
export default CurrencyEuroBold;
export type { CurrencyEuroBoldProps };
