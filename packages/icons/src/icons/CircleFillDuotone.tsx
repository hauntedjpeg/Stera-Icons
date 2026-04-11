import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88a8.13 8.13 0 1 1 0 16.25 8.13 8.13 0 0 1 0-16.25" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 1.75a8.13 8.13 0 1 0 0 16.25 8.13 8.13 0 0 0 0-16.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleFillDuotone.displayName = 'CircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleFillDuotone, CircleFillDuotone as CircleFillDuotoneIcon, CircleFillDuotone as SiCircleFillDuotone };
export default CircleFillDuotone;
export type { CircleFillDuotoneProps };
