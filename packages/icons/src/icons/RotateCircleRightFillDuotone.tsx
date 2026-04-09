import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m2.12 4.25a.88.88 0 0 0-1.24 1.24l1 1h-2.13a4.63 4.63 0 1 0 3.78 7.3.88.88 0 0 0-1.43-1.01 2.87 2.87 0 1 1-2.35-4.53h2.14l-1 1a.88.88 0 0 0 1.23 1.24l2.43-2.43c.38-.38.38-1 0-1.38z" clipRule="evenodd" opacity={.4} />
        <path d="M12.88 6.38a.9.9 0 0 1 1.24 0l2.43 2.43c.38.38.38 1 0 1.38l-2.43 2.43a.88.88 0 0 1-1.24-1.24l1-1h-2.13a2.88 2.88 0 1 0 2.35 4.53.88.88 0 0 1 1.43 1 4.62 4.62 0 1 1-3.78-7.29h2.14l-1-1a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

RotateCircleRightFillDuotone.displayName = 'RotateCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleRightFillDuotone, RotateCircleRightFillDuotone as RotateCircleRightFillDuotoneIcon, RotateCircleRightFillDuotone as SiRotateCircleRightFillDuotone };
export default RotateCircleRightFillDuotone;
export type { RotateCircleRightFillDuotoneProps };
