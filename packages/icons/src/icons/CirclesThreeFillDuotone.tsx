import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclesThreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 11.65a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75M17.5 11.65a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75" />
        <path d="M12 2.13a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.76" opacity={.4} />
    </IconBase>
  ))
);

CirclesThreeFillDuotone.displayName = 'CirclesThreeFillDuotone';

// Triple export pattern (lucide-react style)
export { CirclesThreeFillDuotone, CirclesThreeFillDuotone as CirclesThreeFillDuotoneIcon, CirclesThreeFillDuotone as SiCirclesThreeFillDuotone };
export default CirclesThreeFillDuotone;
export type { CirclesThreeFillDuotoneProps };
