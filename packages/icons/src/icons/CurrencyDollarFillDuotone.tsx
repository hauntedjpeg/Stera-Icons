import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.25 21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.25h2.5zM13.25 13.25v3h-2.5v-3zM13.25 10.75h-2.5v-3h2.5zM12 1.75c.69 0 1.25.56 1.25 1.25v2.25h-2.5V3c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M16.25 5.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h4.75c2.2 0 4 1.8 4 4s-1.8 4-4 4H7.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h7.25c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9.75c-2.2 0-4-1.8-4-4s1.8-4 4-4z" />
    </IconBase>
  ))
);

CurrencyDollarFillDuotone.displayName = 'CurrencyDollarFillDuotone';

// Triple export pattern
export { CurrencyDollarFillDuotone, CurrencyDollarFillDuotone as CurrencyDollarFillDuotoneIcon, CurrencyDollarFillDuotone as SiCurrencyDollarFillDuotone };
export default CurrencyDollarFillDuotone;
export type { CurrencyDollarFillDuotoneProps };
