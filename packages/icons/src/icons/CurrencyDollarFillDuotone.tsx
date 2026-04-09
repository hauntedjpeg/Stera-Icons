import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-fill-duotone" {...props}>
      <path d="M13.25 21a1.25 1.25 0 1 1-2.5 0v-2.25h2.5zM13.25 13.25v3h-2.5v-3zM13.25 10.75h-2.5v-3h2.5zM12 1.75c.69 0 1.25.56 1.25 1.25v2.25h-2.5V3c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M16.25 5.25a1.25 1.25 0 1 1 0 2.5h-6.5a1.5 1.5 0 0 0 0 3h4.75a4 4 0 0 1 0 8H7.25a1.25 1.25 0 1 1 0-2.5h7.25a1.5 1.5 0 0 0 0-3H9.75a4 4 0 0 1 0-8z" />
    </IconBase>
  ))
);

CurrencyDollarFillDuotone.displayName = 'CurrencyDollarFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyDollarFillDuotone, CurrencyDollarFillDuotone as CurrencyDollarFillDuotoneIcon, CurrencyDollarFillDuotone as SiCurrencyDollarFillDuotone };
export default CurrencyDollarFillDuotone;
export type { CurrencyDollarFillDuotoneProps };
