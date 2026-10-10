import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 21.95c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95zM13 2.05c5.05.5 9 4.76 9 9.95s-3.95 9.45-9 9.95z" opacity={0.4} />
        <path d="M12 2q.5 0 1 .05v19.9q-.5.05-1 .05t-1-.05V2.05Q11.5 2 12 2" />
    </IconBase>
  ))
);

CircleDivideFillDuotone.displayName = 'CircleDivideFillDuotone';

// Triple export pattern
export { CircleDivideFillDuotone, CircleDivideFillDuotone as CircleDivideFillDuotoneIcon, CircleDivideFillDuotone as SiCircleDivideFillDuotone };
export default CircleDivideFillDuotone;
export type { CircleDivideFillDuotoneProps };
