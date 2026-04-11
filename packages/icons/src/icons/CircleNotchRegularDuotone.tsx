import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 0 1.5 0A9.75 9.75 0 1 1 12 2.25" opacity={.4} />
        <path d="M12 2.25A9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 12 3.75a.75.75 0 0 1 0-1.5" />
    </IconBase>
  ))
);

CircleNotchRegularDuotone.displayName = 'CircleNotchRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchRegularDuotone, CircleNotchRegularDuotone as CircleNotchRegularDuotoneIcon, CircleNotchRegularDuotone as SiCircleNotchRegularDuotone };
export default CircleNotchRegularDuotone;
export type { CircleNotchRegularDuotoneProps };
