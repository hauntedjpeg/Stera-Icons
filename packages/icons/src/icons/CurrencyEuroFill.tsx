import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 2.75c.69 0 1.25.56 1.25 1.25S17.69 5.25 17 5.25h-2.25c-1.89 0-3.17.45-4.02 1.35-.45.5-.84 1.18-1.1 2.15H15c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.27l-.02.75q0 .39.02.75H15c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.62q.42 1.44 1.11 2.15c.85.9 2.13 1.35 4.02 1.35H17c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.25c-2.26 0-4.34-.55-5.84-2.15q-1.37-1.47-1.86-3.85H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.76L6.75 12l.01-.75H5c-.69 0-1.25-.56-1.25-1.25S4.31 8.75 5 8.75h2.05q.49-2.38 1.86-3.85c1.5-1.6 3.58-2.15 5.84-2.15z" />
    </IconBase>
  ))
);

CurrencyEuroFill.displayName = 'CurrencyEuroFill';

// Triple export pattern
export { CurrencyEuroFill, CurrencyEuroFill as CurrencyEuroFillIcon, CurrencyEuroFill as SiCurrencyEuroFill };
export default CurrencyEuroFill;
export type { CurrencyEuroFillProps };
