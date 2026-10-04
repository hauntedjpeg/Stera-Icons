import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PizzaRegularDuotone = memo(
  forwardRef<SVGSVGElement, PizzaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.46 8.3q.35.17.66.36l.65.37-3.36 5.83-3.76 6.52a.75.75 0 0 1-1.3 0l-2.89-5v-.01L4.23 9.03l.64-.37.66-.36 1.97 3.4q.65-.43 1.5-.45a2.75 2.75 0 0 1 1.24 5.2L12 19.5l2.63-4.56a3.25 3.25 0 1 1 3.24-5.6zM9 12.75q-.43.01-.75.25l1.24 2.15a1.25 1.25 0 0 0-.49-2.4m7-2.5a1.75 1.75 0 0 0-.62 3.39l1.73-3q-.46-.37-1.11-.39" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c3.3 0 6.52.87 9.38 2.51.35.2.48.67.27 1.03l-1.88 3.24-.64-.37a14.3 14.3 0 0 0-14.26 0l-.64.37L2.35 5.8a.75.75 0 0 1 .27-1.03A19 19 0 0 1 12 2.25m0 1.5c-2.78 0-5.51.67-7.97 1.95L4.78 7a15.8 15.8 0 0 1 14.43 0l.76-1.3A17 17 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaRegularDuotone.displayName = 'PizzaRegularDuotone';

// Triple export pattern (lucide-react style)
export { PizzaRegularDuotone, PizzaRegularDuotone as PizzaRegularDuotoneIcon, PizzaRegularDuotone as SiPizzaRegularDuotone };
export default PizzaRegularDuotone;
export type { PizzaRegularDuotoneProps };
