import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CarrotFillDuotone = memo(
  forwardRef<SVGSVGElement, CarrotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.63 8.58a4.09 4.09 0 0 1 6.32 5.13l-2.83-2.83a.88.88 0 0 0-1.24 1.24l2.85 2.85c-1.2.97-3.3 2.38-5.42 3.5a18 18 0 0 1-3.6 1.5q-.78.18-1.23.15c-.3-.02-.42-.1-.46-.14s-.12-.16-.14-.46q-.03-.45.16-1.23a18 18 0 0 1 1.63-3.88l1.21 1.2a.88.88 0 0 0 1.24-1.23l-1.55-1.54a27 27 0 0 1 3.06-4.26" opacity={.4} />
        <path fillRule="evenodd" d="M16.03 2.13c.49 0 .88.39.88.87v2.85l2.01-2.02a.88.88 0 0 1 1.24 1.24l-2.01 2.01H21a.88.88 0 0 1 0 1.75h-3.27c1.11 2.2.75 4.94-1.08 6.77-1.05 1.06-3.81 3-6.53 4.42a19 19 0 0 1-3.99 1.64q-.91.24-1.77.2a2.4 2.4 0 0 1-1.58-.64 2.4 2.4 0 0 1-.65-1.58q-.03-.85.21-1.78c.3-1.22.92-2.62 1.64-3.99C5.4 11.17 7.34 8.4 8.4 7.34a5.8 5.8 0 0 1 6.76-1.08V3c0-.48.39-.87.87-.87m-.65 6.42a4.1 4.1 0 0 0-5.75.03c-.67.67-1.9 2.34-3.06 4.26l1.55 1.54a.88.88 0 0 1-1.24 1.24l-1.2-1.2-.15.27a18 18 0 0 0-1.5 3.6q-.18.78-.15 1.23c.02.3.1.42.14.46s.16.12.46.14q.45.03 1.22-.16c1.03-.26 2.3-.8 3.61-1.49a36 36 0 0 0 5.42-3.5l-2.85-2.85a.88.88 0 0 1 1.24-1.24l2.83 2.83a4.1 4.1 0 0 0-.57-5.16" clipRule="evenodd" />
    </IconBase>
  ))
);

CarrotFillDuotone.displayName = 'CarrotFillDuotone';

// Triple export pattern
export { CarrotFillDuotone, CarrotFillDuotone as CarrotFillDuotoneIcon, CarrotFillDuotone as SiCarrotFillDuotone };
export default CarrotFillDuotone;
export type { CarrotFillDuotoneProps };
