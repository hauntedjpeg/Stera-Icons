import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownFillProps = Omit<IconBaseProps, 'children'>;

const TriangleDownFill = memo(
  forwardRef<SVGSVGElement, TriangleDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.06 3.13q1.68-.02 2.72.06c.7.06 1.34.2 1.87.58a3.4 3.4 0 0 1 1.37 2.38c.07.64-.14 1.27-.43 1.9q-.46.95-1.3 2.4l-4.07 7q-.82 1.47-1.42 2.33c-.4.57-.84 1.05-1.43 1.31-.87.4-1.87.4-2.74 0a3.7 3.7 0 0 1-1.44-1.31q-.59-.87-1.4-2.32l-4.07-7.02Q2.86 9 2.4 8.05c-.3-.63-.5-1.26-.43-1.9.1-.95.6-1.82 1.37-2.38a3.7 3.7 0 0 1 1.86-.58c.7-.07 1.6-.06 2.73-.06z" />
    </IconBase>
  ))
);

TriangleDownFill.displayName = 'TriangleDownFill';

// Triple export pattern (lucide-react style)
export { TriangleDownFill, TriangleDownFill as TriangleDownFillIcon, TriangleDownFill as SiTriangleDownFill };
export default TriangleDownFill;
export type { TriangleDownFillProps };
