import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c-.55 0-1 .45-1 1s.45 1 1 1c-1.05 0-2.1.2-3.06.6q-1.46.62-2.6 1.74-1.12 1.13-1.73 2.6Q4 10.4 4 12c0 1.05.2 2.1.6 3.06q.62 1.46 1.74 2.6 1.13 1.12 2.6 1.73Q10.4 20 12 20c1.05 0 2.1-.2 3.06-.6q1.46-.62 2.6-1.74 1.12-1.14 1.73-2.6T20 12c0 .55.45 1 1 1s1-.45 1-1q0 1.98-.76 3.83-.76 1.83-2.17 3.24-1.41 1.4-3.24 2.17-1.85.75-3.83.76-1.98 0-3.83-.76-1.83-.76-3.24-2.17-1.4-1.41-2.17-3.24Q2.01 13.98 2 12q0-1.98.76-3.83.76-1.83 2.17-3.24 1.41-1.4 3.24-2.17Q10.02 2.01 12 2" opacity={.4} />
        <path d="M12 2q1.98 0 3.83.76 1.83.76 3.24 2.17 1.4 1.41 2.17 3.24.75 1.85.76 3.83c0 .55-.45 1-1 1s-1-.45-1-1c0-1.05-.2-2.1-.6-3.06q-.62-1.46-1.74-2.6-1.14-1.12-2.6-1.73T12 4c-.55 0-1-.45-1-1s.45-1 1-1" />
    </IconBase>
  ))
);

CircleNotchBoldDuotone.displayName = 'CircleNotchBoldDuotone';

// Triple export pattern
export { CircleNotchBoldDuotone, CircleNotchBoldDuotone as CircleNotchBoldDuotoneIcon, CircleNotchBoldDuotone as SiCircleNotchBoldDuotone };
export default CircleNotchBoldDuotone;
export type { CircleNotchBoldDuotoneProps };
