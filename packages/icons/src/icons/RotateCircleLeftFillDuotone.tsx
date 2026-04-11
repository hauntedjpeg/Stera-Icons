import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.88 4.25a.9.9 0 0 0-1.24 0L7.45 8.81a1 1 0 0 0 0 1.38l2.43 2.43a.88.88 0 0 0 1.24-1.24l-1-1h2.13A2.88 2.88 0 1 1 9.9 14.9a.88.88 0 0 0-1.43 1 4.62 4.62 0 1 0 3.78-7.28h-2.14l1-1.01a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 6.38a.88.88 0 0 1 1.24 1.24l-1 1h2.13a4.63 4.63 0 1 1-3.78 7.3.88.88 0 0 1 1.43-1.01 2.87 2.87 0 1 0 2.35-4.54H10.1l1 1.01a.88.88 0 0 1-1.23 1.24l-2.43-2.43a1 1 0 0 1 0-1.38z" />
    </IconBase>
  ))
);

RotateCircleLeftFillDuotone.displayName = 'RotateCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftFillDuotone, RotateCircleLeftFillDuotone as RotateCircleLeftFillDuotoneIcon, RotateCircleLeftFillDuotone as SiRotateCircleLeftFillDuotone };
export default RotateCircleLeftFillDuotone;
export type { RotateCircleLeftFillDuotoneProps };
