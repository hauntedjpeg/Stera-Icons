import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsFillDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.12 13.45c.3-.37.85-.43 1.23-.13l6.2 5c.38.3.43.85.13 1.23-.3.37-.85.43-1.23.13l-6.2-5c-.37-.3-.43-.85-.13-1.23M5.5 3.13c1.86 0 3.38 1.5 3.38 3.37q0 .74-.3 1.36l1.81 1.46c.38.3.43.85.13 1.23-.3.37-.85.43-1.23.13L7.5 9.23c-.56.4-1.25.64-1.99.64-1.86 0-3.37-1.5-3.37-3.37 0-1.86 1.5-3.37 3.37-3.37" opacity={0.4} />
        <path d="M20.45 4.32c.38-.3.93-.25 1.23.13s.25.93-.13 1.23L8.59 16.13q.27.63.29 1.37c0 1.86-1.52 3.37-3.38 3.37s-3.37-1.5-3.37-3.37c0-1.86 1.5-3.38 3.37-3.38.74 0 1.43.25 1.99.65z" />
    </IconBase>
  ))
);

ScissorsFillDuotone.displayName = 'ScissorsFillDuotone';

// Triple export pattern
export { ScissorsFillDuotone, ScissorsFillDuotone as ScissorsFillDuotoneIcon, ScissorsFillDuotone as SiScissorsFillDuotone };
export default ScissorsFillDuotone;
export type { ScissorsFillDuotoneProps };
