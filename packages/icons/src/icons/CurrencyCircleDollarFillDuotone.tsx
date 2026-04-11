import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.25 3.25c-.48 0-.87.39-.87.87v1.38h-.13a2.63 2.63 0 0 0 0 5.25h3a.88.88 0 0 1 0 1.74H9a.88.88 0 0 0 0 1.76h2.38v1.37a.88.88 0 0 0 1.74 0v-1.37h.63a2.63 2.63 0 0 0 0-5.25h-3a.87.87 0 1 1 0-1.76h3.75a.88.88 0 0 0 0-1.74h-1.87V6.25c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M11.75 5.38c.48 0 .88.39.88.87v1.38h1.87a.88.88 0 0 1 0 1.75h-3.75a.88.88 0 0 0 0 1.74h3a2.63 2.63 0 0 1 0 5.26h-.62v1.37a.88.88 0 0 1-1.76 0v-1.37H9a.88.88 0 0 1 0-1.75h4.75a.88.88 0 0 0 0-1.76h-3a2.62 2.62 0 1 1 0-5.24h.13V6.25c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

CurrencyCircleDollarFillDuotone.displayName = 'CurrencyCircleDollarFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarFillDuotone, CurrencyCircleDollarFillDuotone as CurrencyCircleDollarFillDuotoneIcon, CurrencyCircleDollarFillDuotone as SiCurrencyCircleDollarFillDuotone };
export default CurrencyCircleDollarFillDuotone;
export type { CurrencyCircleDollarFillDuotoneProps };
