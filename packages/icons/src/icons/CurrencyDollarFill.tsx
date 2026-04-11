import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFill = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c.69 0 1.25.56 1.25 1.25v2.25h3a1.25 1.25 0 1 1 0 2.5h-3v3h1.25a4 4 0 0 1 0 8h-1.25V21a1.25 1.25 0 1 1-2.5 0v-2.25h-3.5a1.25 1.25 0 1 1 0-2.5h3.5v-3h-1a4 4 0 0 1 0-8h1V3c0-.69.56-1.25 1.25-1.25m1.25 14.5h1.25a1.5 1.5 0 0 0 0-3h-1.25zm-3.5-8.5a1.5 1.5 0 0 0 0 3h1v-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarFill.displayName = 'CurrencyDollarFill';

// Triple export pattern (lucide-react style)
export { CurrencyDollarFill, CurrencyDollarFill as CurrencyDollarFillIcon, CurrencyDollarFill as SiCurrencyDollarFill };
export default CurrencyDollarFill;
export type { CurrencyDollarFillProps };
