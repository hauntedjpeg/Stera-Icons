import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PizzaRegularDuotone = memo(
  forwardRef<SVGSVGElement, PizzaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.46 8.3q.35.17.66.36l.65.37-3.36 5.83-3.76 6.52c-.13.23-.38.37-.65.37s-.52-.14-.65-.37l-2.89-5v-.01L4.23 9.03l.64-.37.66-.36 1.97 3.4q.65-.43 1.5-.45c1.52 0 2.75 1.23 2.75 2.75 0 1.07-.62 2-1.51 2.45L12 19.5l2.63-4.56c-1.11-.51-1.88-1.64-1.88-2.94 0-1.8 1.46-3.25 3.25-3.25q1.06.02 1.87.59zM9 12.75q-.43.01-.75.25l1.24 2.15c.45-.2.76-.63.76-1.15 0-.69-.56-1.25-1.25-1.25m7-2.5c-.97 0-1.75.78-1.75 1.75 0 .75.47 1.39 1.13 1.64l1.73-3q-.46-.37-1.11-.39" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c3.3 0 6.52.87 9.38 2.51.35.2.48.67.27 1.03l-1.88 3.24-.64-.37C16.95 7.4 14.5 6.75 12 6.75s-4.96.66-7.13 1.9l-.64.38L2.35 5.8q-.15-.28-.07-.57.08-.3.34-.46C5.48 3.12 8.71 2.25 12 2.25m0 1.5c-2.78 0-5.51.67-7.97 1.95L4.78 7C7.01 5.85 9.48 5.25 12 5.25s4.99.6 7.21 1.75l.76-1.3C17.5 4.42 14.77 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaRegularDuotone.displayName = 'PizzaRegularDuotone';

// Triple export pattern
export { PizzaRegularDuotone, PizzaRegularDuotone as PizzaRegularDuotoneIcon, PizzaRegularDuotone as SiPizzaRegularDuotone };
export default PizzaRegularDuotone;
export type { PizzaRegularDuotoneProps };
