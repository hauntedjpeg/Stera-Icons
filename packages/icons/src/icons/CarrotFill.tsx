import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotFillProps = Omit<IconBaseProps, 'children'>;

const CarrotFill = memo(
  forwardRef<SVGSVGElement, CarrotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.03 2.13c.48 0 .88.39.88.87v2.85l2.01-2.02c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.01 2.01H21c.48 0 .87.4.87.88s-.39.87-.87.87h-3.27c.99 1.95.81 4.34-.53 6.13l-4.08-4.08c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4.1 4.09c-1.33 1.1-3.6 2.63-5.86 3.81-1.36.71-2.77 1.33-3.99 1.64q-.91.24-1.77.2c-.55-.03-1.14-.2-1.58-.64-.44-.45-.61-1.03-.65-1.58q-.03-.85.2-1.78c.32-1.22.93-2.62 1.65-3.99l.4-.75 2.5 2.5c.34.34.9.34 1.24 0s.34-.9 0-1.24L5.3 11.56C6.44 9.71 7.64 8.1 8.4 7.34c1.83-1.83 4.57-2.19 6.76-1.08V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

CarrotFill.displayName = 'CarrotFill';

// Triple export pattern
export { CarrotFill, CarrotFill as CarrotFillIcon, CarrotFill as SiCarrotFill };
export default CarrotFill;
export type { CarrotFillProps };
