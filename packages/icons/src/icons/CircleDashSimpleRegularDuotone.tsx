import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.56 7.12c.2-.35.66-.48 1.02-.27s.48.67.27 1.02c-.7 1.22-1.1 2.63-1.1 4.13s.4 2.91 1.1 4.12c.21.36.09.82-.27 1.03-.36.2-.82.08-1.02-.27-.83-1.44-1.31-3.1-1.31-4.88s.48-3.44 1.3-4.88M19.42 6.85c.36-.2.82-.08 1.02.27.83 1.44 1.31 3.1 1.31 4.88s-.48 3.44-1.3 4.88c-.21.35-.67.48-1.03.27s-.48-.67-.27-1.03c.7-1.2 1.1-2.62 1.1-4.12s-.4-2.91-1.1-4.13c-.21-.35-.09-.81.27-1.02" opacity={0.4} />
        <path d="M16.13 19.15c.35-.21.81-.09 1.02.27s.08.82-.27 1.02c-1.44.83-3.1 1.31-4.88 1.31s-3.44-.48-4.88-1.3c-.35-.21-.48-.67-.27-1.03s.67-.48 1.03-.27c1.2.7 2.62 1.1 4.12 1.1s2.91-.4 4.13-1.1M12 2.25c1.78 0 3.44.48 4.88 1.3.35.21.48.67.27 1.03s-.67.48-1.02.27c-1.22-.7-2.63-1.1-4.13-1.1s-2.91.4-4.12 1.1c-.36.21-.82.09-1.03-.27-.2-.36-.08-.82.27-1.02 1.44-.83 3.1-1.31 4.88-1.31" />
    </IconBase>
  ))
);

CircleDashSimpleRegularDuotone.displayName = 'CircleDashSimpleRegularDuotone';

// Triple export pattern
export { CircleDashSimpleRegularDuotone, CircleDashSimpleRegularDuotone as CircleDashSimpleRegularDuotoneIcon, CircleDashSimpleRegularDuotone as SiCircleDashSimpleRegularDuotone };
export default CircleDashSimpleRegularDuotone;
export type { CircleDashSimpleRegularDuotoneProps };
