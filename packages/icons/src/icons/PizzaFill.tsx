import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaFillProps = Omit<IconBaseProps, 'children'>;

const PizzaFill = memo(
  forwardRef<SVGSVGElement, PizzaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c3.31 0 6.57.87 9.44 2.52.42.24.56.78.32 1.2l-2.97 5.13-2.27 3.95-3.76 6.5c-.16.28-.45.45-.76.45s-.6-.17-.76-.44l-4.67-8.1-4.33-7.5c-.24-.41-.1-.95.32-1.19C5.43 3 8.7 2.13 12 2.12M9 12q-.56 0-1.02.28c.68 1.18 1.27 2.22 2 3.46.6-.34 1.02-.99 1.02-1.74 0-1.1-.9-2-2-2m7-2.5c-1.38 0-2.5 1.12-2.5 2.5 0 .98.57 1.83 1.4 2.24l2.49-4.32q-.61-.4-1.39-.42m-4-5.62c-2.71 0-5.38.64-7.8 1.87q.59 1 1.07 1.85C7.36 6.55 9.66 6 12 6s4.64.55 6.73 1.6l1.06-1.85C17.4 4.52 14.71 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaFill.displayName = 'PizzaFill';

// Triple export pattern
export { PizzaFill, PizzaFill as PizzaFillIcon, PizzaFill as SiPizzaFill };
export default PizzaFill;
export type { PizzaFillProps };
