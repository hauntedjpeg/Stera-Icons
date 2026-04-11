import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeFillProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeFill = memo(
  forwardRef<SVGSVGElement, CirclesThreeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 11.65a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75M17.5 11.65a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75M12 2.13a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.76" />
    </IconBase>
  ))
);

CirclesThreeFill.displayName = 'CirclesThreeFill';

// Triple export pattern (lucide-react style)
export { CirclesThreeFill, CirclesThreeFill as CirclesThreeFillIcon, CirclesThreeFill as SiCirclesThreeFill };
export default CirclesThreeFill;
export type { CirclesThreeFillProps };
