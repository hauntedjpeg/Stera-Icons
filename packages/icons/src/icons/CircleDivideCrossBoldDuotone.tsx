import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4q.5 0 1 .06V11h6.94q.06.5.06 1t-.06 1H13v6.94q-.5.06-1 .06t-1-.06V13H4.06Q4 12.5 4 12t.06-1H11V4.06Q11.5 4 12 4" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBoldDuotone.displayName = 'CircleDivideCrossBoldDuotone';

// Triple export pattern
export { CircleDivideCrossBoldDuotone, CircleDivideCrossBoldDuotone as CircleDivideCrossBoldDuotoneIcon, CircleDivideCrossBoldDuotone as SiCircleDivideCrossBoldDuotone };
export default CircleDivideCrossBoldDuotone;
export type { CircleDivideCrossBoldDuotoneProps };
