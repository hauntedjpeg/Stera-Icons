import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclesThreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 11.65c2.42 0 4.38 1.96 4.38 4.38S8.91 20.4 6.5 20.4s-4.37-1.96-4.37-4.37 1.95-4.38 4.37-4.38M17.5 11.65c2.42 0 4.38 1.96 4.38 4.38s-1.96 4.37-4.38 4.37-4.37-1.96-4.37-4.37 1.95-4.38 4.37-4.38" />
        <path d="M12 2.13c2.42 0 4.38 1.95 4.38 4.37s-1.96 4.38-4.38 4.38S7.63 8.91 7.63 6.5 9.57 2.13 12 2.13" opacity={.4} />
    </IconBase>
  ))
);

CirclesThreeFillDuotone.displayName = 'CirclesThreeFillDuotone';

// Triple export pattern
export { CirclesThreeFillDuotone, CirclesThreeFillDuotone as CirclesThreeFillDuotoneIcon, CirclesThreeFillDuotone as SiCirclesThreeFillDuotone };
export default CirclesThreeFillDuotone;
export type { CirclesThreeFillDuotoneProps };
