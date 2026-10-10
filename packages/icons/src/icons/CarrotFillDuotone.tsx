import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CarrotFillDuotone = memo(
  forwardRef<SVGSVGElement, CarrotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.63 8.58c1.59-1.59 4.15-1.6 5.75-.03l.06.06c1.37 1.4 1.54 3.52.5 5.1l-2.82-2.83c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2.85 2.85c-1.2.97-3.3 2.38-5.42 3.5-1.31.69-2.58 1.23-3.6 1.5q-.78.18-1.23.15c-.3-.02-.42-.1-.46-.14s-.12-.16-.14-.46q-.03-.45.16-1.23c.26-1.02.8-2.3 1.49-3.6l.14-.28 1.21 1.2c.34.35.9.35 1.24 0 .34-.33.34-.89 0-1.23l-1.55-1.54c1.16-1.92 2.4-3.59 3.06-4.26" opacity={.4} />
        <path fillRule="evenodd" d="M16.03 2.13c.49 0 .88.39.88.87v2.85l2.01-2.02c.35-.34.9-.34 1.24 0s.34.9 0 1.24l-2.01 2.01H21c.48 0 .87.4.87.88s-.39.87-.87.87h-3.27c1.11 2.2.75 4.94-1.08 6.77-1.05 1.06-3.81 3-6.53 4.42-1.36.71-2.76 1.33-3.99 1.64q-.91.24-1.77.2c-.55-.03-1.13-.2-1.58-.64-.44-.45-.61-1.03-.65-1.58q-.03-.85.21-1.78c.3-1.22.92-2.62 1.64-3.99C5.4 11.17 7.34 8.4 8.4 7.34c1.83-1.83 4.57-2.19 6.76-1.08V3c0-.48.39-.87.87-.87m-.65 6.42c-1.6-1.57-4.16-1.56-5.75.03-.67.67-1.9 2.34-3.06 4.26l1.55 1.54c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1.2-1.2-.15.27c-.69 1.3-1.23 2.58-1.5 3.6q-.18.78-.15 1.23c.02.3.1.42.14.46s.16.12.46.14q.45.03 1.22-.16c1.03-.26 2.3-.8 3.61-1.49 2.13-1.12 4.23-2.53 5.42-3.5l-2.85-2.85c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l2.83 2.83c1.03-1.58.86-3.7-.5-5.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

CarrotFillDuotone.displayName = 'CarrotFillDuotone';

// Triple export pattern
export { CarrotFillDuotone, CarrotFillDuotone as CarrotFillDuotoneIcon, CarrotFillDuotone as SiCarrotFillDuotone };
export default CarrotFillDuotone;
export type { CarrotFillDuotoneProps };
