import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaFillProps = Omit<IconBaseProps, 'children'>;

const PizzaFill = memo(
  forwardRef<SVGSVGElement, PizzaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c3.31 0 6.57.87 9.44 2.52.42.24.56.78.32 1.2l-2.97 5.13-2.27 3.95-3.76 6.5a.88.88 0 0 1-1.52 0c-2.33-4.03-3.36-5.8-4.67-8.09l-4.33-7.5a.9.9 0 0 1 .32-1.19A19 19 0 0 1 12 2.12M9 12q-.56 0-1.02.28c.68 1.18 1.27 2.22 2 3.46A2 2 0 0 0 9 12m7-2.5a2.5 2.5 0 0 0-1.1 4.74l2.49-4.32q-.61-.4-1.39-.42m-4-5.62c-2.71 0-5.38.64-7.8 1.87q.59 1 1.07 1.85a15 15 0 0 1 13.46 0l1.06-1.85A17 17 0 0 0 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaFill.displayName = 'PizzaFill';

// Triple export pattern
export { PizzaFill, PizzaFill as PizzaFillIcon, PizzaFill as SiPizzaFill };
export default PizzaFill;
export type { PizzaFillProps };
