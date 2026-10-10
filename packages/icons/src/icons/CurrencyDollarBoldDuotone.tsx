import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 21c0 .55-.45 1-1 1s-1-.45-1-1v-2.5h2zM13 13v3.5h-2V13zM13 11h-2V7.5h2zM12 2c.55 0 1 .45 1 1v2.5h-2V3c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M16.25 5.5c.55 0 1 .45 1 1s-.45 1-1 1h-6.5C8.78 7.5 8 8.28 8 9.25S8.78 11 9.75 11h4.75c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75H7.25c-.55 0-1-.45-1-1s.45-1 1-1h7.25c.97 0 1.75-.78 1.75-1.75S15.47 13 14.5 13H9.75C7.68 13 6 11.32 6 9.25S7.68 5.5 9.75 5.5z" />
    </IconBase>
  ))
);

CurrencyDollarBoldDuotone.displayName = 'CurrencyDollarBoldDuotone';

// Triple export pattern
export { CurrencyDollarBoldDuotone, CurrencyDollarBoldDuotone as CurrencyDollarBoldDuotoneIcon, CurrencyDollarBoldDuotone as SiCurrencyDollarBoldDuotone };
export default CurrencyDollarBoldDuotone;
export type { CurrencyDollarBoldDuotoneProps };
