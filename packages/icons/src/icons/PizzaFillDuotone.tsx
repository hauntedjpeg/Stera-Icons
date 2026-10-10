import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PizzaFillDuotone = memo(
  forwardRef<SVGSVGElement, PizzaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.88c2.19 0 4.34.5 6.29 1.47l-.47.81q-.8-.52-1.82-.54c-1.86 0-3.37 1.52-3.37 3.38 0 1.3.74 2.44 1.82 3L12 19.25l-1.59-2.75c.88-.5 1.47-1.43 1.47-2.5 0-1.59-1.3-2.87-2.88-2.87q-.8 0-1.46.4L5.7 8.34C7.66 7.38 9.8 6.88 12 6.88" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c3.31 0 6.57.87 9.44 2.52.42.24.56.78.32 1.2l-1.5 2.58v.02l-4 6.9c-.86 1.52-1.92 3.34-3.5 6.09-.16.27-.45.43-.76.43s-.6-.16-.76-.43L6.3 12.88 3.9 8.73l-.16-.28-1.5-2.6c-.24-.42-.1-.96.32-1.2C5.43 3 8.7 2.13 12 2.12m0 4.75c-2.19 0-4.34.5-6.3 1.47l1.84 3.17q.66-.39 1.46-.4c1.59 0 2.88 1.3 2.88 2.88 0 1.07-.6 2-1.47 2.5L12 19.25 14.45 15c-1.08-.56-1.82-1.7-1.82-3 0-1.86 1.5-3.37 3.37-3.37q1.02.02 1.82.53l.47-.8c-1.95-.98-4.1-1.48-6.29-1.48m-3 6q-.33 0-.59.16l1.13 1.95c.35-.2.59-.56.59-.99 0-.62-.5-1.12-1.13-1.12m7-2.5c-.9 0-1.62.72-1.62 1.62 0 .66.39 1.22.95 1.48l.03-.05 1.59-2.75q-.41-.3-.95-.3m-4-6.5c-2.71 0-5.38.64-7.8 1.87l.63 1.09C7.05 5.7 9.51 5.13 12 5.13s4.95.58 7.16 1.7l.63-1.08C17.4 4.52 14.71 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaFillDuotone.displayName = 'PizzaFillDuotone';

// Triple export pattern
export { PizzaFillDuotone, PizzaFillDuotone as PizzaFillDuotoneIcon, PizzaFillDuotone as SiPizzaFillDuotone };
export default PizzaFillDuotone;
export type { PizzaFillDuotoneProps };
