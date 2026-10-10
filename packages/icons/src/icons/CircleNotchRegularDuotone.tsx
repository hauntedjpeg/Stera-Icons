import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c-.41 0-.75.34-.75.75s.34.75.75.75q-1.64 0-3.16.63-1.5.63-2.67 1.79Q5 7.32 4.37 8.84c-.4 1-.62 2.08-.62 3.16s.21 2.16.63 3.16q.63 1.5 1.79 2.67 1.15 1.16 2.67 1.8c1 .4 2.08.62 3.16.62s2.16-.21 3.16-.63q1.5-.62 2.67-1.79 1.16-1.16 1.8-2.67.61-1.52.62-3.16c0 .41.34.75.75.75s.75-.34.75-.75c0 1.28-.25 2.55-.74 3.73q-.75 1.79-2.12 3.16c-.9.91-1.98 1.63-3.16 2.12s-2.45.74-3.73.74-2.55-.25-3.73-.74C7.09 20.5 6 19.8 5.1 18.89c-.91-.9-1.63-1.98-2.12-3.16s-.74-2.45-.74-3.73.25-2.55.74-3.73C3.5 7.09 4.2 6 5.11 5.1 6 4.2 7.09 3.48 8.27 2.99q1.79-.74 3.73-.74" opacity={.4} />
        <path d="M12 2.25c1.28 0 2.55.25 3.73.74q1.79.75 3.16 2.12c.91.9 1.63 1.98 2.12 3.16q.74 1.79.74 3.73c0 .41-.34.75-.75.75s-.75-.34-.75-.75q0-1.64-.63-3.16-.62-1.5-1.79-2.67-1.16-1.16-2.67-1.8-1.52-.61-3.16-.62c-.41 0-.75-.34-.75-.75s.34-.75.75-.75" />
    </IconBase>
  ))
);

CircleNotchRegularDuotone.displayName = 'CircleNotchRegularDuotone';

// Triple export pattern
export { CircleNotchRegularDuotone, CircleNotchRegularDuotone as CircleNotchRegularDuotoneIcon, CircleNotchRegularDuotone as SiCircleNotchRegularDuotone };
export default CircleNotchRegularDuotone;
export type { CircleNotchRegularDuotoneProps };
