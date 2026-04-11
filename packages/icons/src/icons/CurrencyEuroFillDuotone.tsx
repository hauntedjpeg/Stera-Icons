import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.76 12.75q.05 1.36.3 2.5H5a1.25 1.25 0 1 1 0-2.5zM15 12.75a1.25 1.25 0 1 1 0 2.5H9.62q-.29-1.01-.35-2.5zM7.05 8.75q-.24 1.14-.29 2.5H5a1.25 1.25 0 1 1 0-2.5zM15 8.75a1.25 1.25 0 1 1 0 2.5H9.27q.06-1.49.35-2.5z" opacity={0.4} />
        <path d="M17 2.75a1.25 1.25 0 1 1 0 2.5h-2.25c-1.89 0-3.17.45-4.02 1.35-.86.92-1.48 2.55-1.48 5.4s.62 4.48 1.48 5.4c.85.9 2.13 1.35 4.02 1.35H17a1.25 1.25 0 1 1 0 2.5h-2.25c-2.26 0-4.34-.55-5.84-2.15-1.48-1.58-2.16-3.95-2.16-7.1s.68-5.52 2.16-7.1c1.5-1.6 3.58-2.15 5.84-2.15z" />
    </IconBase>
  ))
);

CurrencyEuroFillDuotone.displayName = 'CurrencyEuroFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroFillDuotone, CurrencyEuroFillDuotone as CurrencyEuroFillDuotoneIcon, CurrencyEuroFillDuotone as SiCurrencyEuroFillDuotone };
export default CurrencyEuroFillDuotone;
export type { CurrencyEuroFillDuotoneProps };
