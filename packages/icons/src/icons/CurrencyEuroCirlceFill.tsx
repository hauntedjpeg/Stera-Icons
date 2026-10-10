import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroCirlceFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m1.25 4.5c-1.46 0-2.73.29-3.58 1.29q-.64.79-.87 1.96H8c-.48 0-.87.39-.87.87s.39.88.87.88h.63v.75H8c-.48 0-.87.39-.87.87s.39.88.87.88h.8q.22 1.16.87 1.95c.85 1 2.12 1.3 3.58 1.3h1.25c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.25c-1.29 0-1.9-.27-2.24-.68q-.24-.29-.4-.82h1.89c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12v-.75h2.12c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.9q.17-.55.41-.83c.35-.4.95-.68 2.24-.68h1.25c.48 0 .88-.39.88-.87s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyEuroCirlceFill.displayName = 'CurrencyEuroCirlceFill';

// Triple export pattern
export { CurrencyEuroCirlceFill, CurrencyEuroCirlceFill as CurrencyEuroCirlceFillIcon, CurrencyEuroCirlceFill as SiCurrencyEuroCirlceFill };
export default CurrencyEuroCirlceFill;
export type { CurrencyEuroCirlceFillProps };
