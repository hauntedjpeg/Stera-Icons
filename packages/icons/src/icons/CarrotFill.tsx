import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotFillProps = Omit<IconBaseProps, 'children'>;

const CarrotFill = memo(
  forwardRef<SVGSVGElement, CarrotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.03 2.13c.49 0 .88.39.88.87v2.85l2.01-2.02a.88.88 0 0 1 1.24 1.24l-2.01 2.01H21a.88.88 0 0 1 0 1.75h-3.27c.99 1.95.81 4.34-.53 6.13l-4.08-4.08a.88.88 0 0 0-1.24 1.24l4.1 4.09a37 37 0 0 1-5.86 3.81 19 19 0 0 1-3.99 1.64q-.91.24-1.77.2a2.4 2.4 0 0 1-1.58-.64 2.4 2.4 0 0 1-.65-1.58q-.03-.85.21-1.78a19 19 0 0 1 2.04-4.74l2.5 2.5a.88.88 0 0 0 1.24-1.24L5.3 11.56a27 27 0 0 1 3.1-4.22 5.8 5.8 0 0 1 6.76-1.08V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

CarrotFill.displayName = 'CarrotFill';

// Triple export pattern (lucide-react style)
export { CarrotFill, CarrotFill as CarrotFillIcon, CarrotFill as SiCarrotFill };
export default CarrotFill;
export type { CarrotFillProps };
