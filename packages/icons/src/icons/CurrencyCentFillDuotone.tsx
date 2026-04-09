import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-cent-fill-duotone" {...props}>
      <path d="M10.75 19.55q1.24.28 2.5.16V22a1.25 1.25 0 1 1-2.5 0zM10.75 7.05q1.22-.43 2.5-.24v10.38c-.8.12-1.63.05-2.4-.2l-.1-.04zM12 .75c.69 0 1.25.56 1.25 1.25v2.29a8 8 0 0 0-2.5.16V2c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M9.25 4.97a7.75 7.75 0 0 1 8.6 1.42 1.25 1.25 0 0 1-1.73 1.8 5.25 5.25 0 1 0 .4 7.19 1.25 1.25 0 0 1 1.92 1.6 7.75 7.75 0 1 1-9.2-12.01" />
    </IconBase>
  ))
);

CurrencyCentFillDuotone.displayName = 'CurrencyCentFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyCentFillDuotone, CurrencyCentFillDuotone as CurrencyCentFillDuotoneIcon, CurrencyCentFillDuotone as SiCurrencyCentFillDuotone };
export default CurrencyCentFillDuotone;
export type { CurrencyCentFillDuotoneProps };
