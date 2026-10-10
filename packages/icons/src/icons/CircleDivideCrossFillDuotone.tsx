import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 13v8.95c-4.72-.47-8.48-4.23-8.95-8.95zM21.95 13c-.47 4.72-4.23 8.48-8.95 8.95V13zM13 2.05c4.72.47 8.48 4.23 8.95 8.95H13zM11 11H2.05C2.52 6.28 6.28 2.52 11 2.05z" opacity={0.4} />
        <path d="M12 2q.5 0 1 .05V11h8.95q.05.5.05 1t-.05 1H13v8.95q-.5.05-1 .05t-1-.05V13H2.05Q2 12.5 2 12t.05-1H11V2.05Q11.5 2 12 2" />
    </IconBase>
  ))
);

CircleDivideCrossFillDuotone.displayName = 'CircleDivideCrossFillDuotone';

// Triple export pattern
export { CircleDivideCrossFillDuotone, CircleDivideCrossFillDuotone as CircleDivideCrossFillDuotoneIcon, CircleDivideCrossFillDuotone as SiCircleDivideCrossFillDuotone };
export default CircleDivideCrossFillDuotone;
export type { CircleDivideCrossFillDuotoneProps };
