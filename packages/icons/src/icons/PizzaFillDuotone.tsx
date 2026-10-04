import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PizzaFillDuotone = memo(
  forwardRef<SVGSVGElement, PizzaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.88c2.19 0 4.34.5 6.29 1.47l-.47.81A3.38 3.38 0 1 0 14.45 15L12 19.25l-1.59-2.75a2.87 2.87 0 1 0-2.87-4.98L5.7 8.35C7.66 7.38 9.8 6.88 12 6.88" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c3.31 0 6.57.87 9.44 2.52.42.24.56.78.32 1.2l-1.5 2.58v.02l-4 6.9c-.86 1.52-1.92 3.34-3.5 6.09a.88.88 0 0 1-1.52 0L6.3 12.88 3.9 8.73l-.16-.28-1.5-2.6a.9.9 0 0 1 .32-1.2A19 19 0 0 1 12 2.12m0 4.75c-2.19 0-4.34.5-6.3 1.47l1.84 3.17q.66-.39 1.46-.4a2.88 2.88 0 0 1 1.41 5.38L12 19.25 14.45 15a3.37 3.37 0 1 1 3.37-5.84l.47-.8A14 14 0 0 0 12 6.87m-3 6q-.33 0-.59.16l1.13 1.95A1.12 1.12 0 0 0 9 12.87m7-2.5a1.63 1.63 0 0 0-.67 3.1l.03-.05 1.59-2.75q-.41-.3-.95-.3m-4-6.5c-2.71 0-5.38.64-7.8 1.87l.63 1.09a15.9 15.9 0 0 1 14.34 0l.62-1.09A17 17 0 0 0 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaFillDuotone.displayName = 'PizzaFillDuotone';

// Triple export pattern (lucide-react style)
export { PizzaFillDuotone, PizzaFillDuotone as PizzaFillDuotoneIcon, PizzaFillDuotone as SiPizzaFillDuotone };
export default PizzaFillDuotone;
export type { PizzaFillDuotoneProps };
