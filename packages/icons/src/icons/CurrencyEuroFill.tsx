import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 2.75a1.25 1.25 0 1 1 0 2.5h-2.25c-1.89 0-3.17.45-4.02 1.35a5 5 0 0 0-1.1 2.15H15a1.25 1.25 0 1 1 0 2.5H9.27a18 18 0 0 0 0 1.5H15a1.25 1.25 0 1 1 0 2.5H9.62a5 5 0 0 0 1.11 2.15c.85.9 2.13 1.35 4.02 1.35H17a1.25 1.25 0 1 1 0 2.5h-2.25c-2.26 0-4.34-.55-5.84-2.15a8 8 0 0 1-1.86-3.85H5a1.25 1.25 0 1 1 0-2.5h1.76a20 20 0 0 1 0-1.5H5a1.25 1.25 0 1 1 0-2.5h2.05A8 8 0 0 1 8.91 4.9c1.5-1.6 3.58-2.15 5.84-2.15z" />
    </IconBase>
  ))
);

CurrencyEuroFill.displayName = 'CurrencyEuroFill';

// Triple export pattern (lucide-react style)
export { CurrencyEuroFill, CurrencyEuroFill as CurrencyEuroFillIcon, CurrencyEuroFill as SiCurrencyEuroFill };
export default CurrencyEuroFill;
export type { CurrencyEuroFillProps };
