import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFill = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 0 0 19.75 9.88 9.88 0 0 0 0-19.75m.88 4.25a.9.9 0 0 1 1.24 0l2.43 2.43c.38.38.38 1 0 1.38l-2.43 2.43a.88.88 0 0 1-1.24-1.24l1-1h-2.13a2.88 2.88 0 1 0 2.35 4.53.88.88 0 0 1 1.43 1 4.62 4.62 0 1 1-3.78-7.28h2.14l-1-1.01a.9.9 0 0 1 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightFill.displayName = 'RotateCircleRightFill';

// Triple export pattern (lucide-react style)
export { RotateCircleRightFill, RotateCircleRightFill as RotateCircleRightFillIcon, RotateCircleRightFill as SiRotateCircleRightFill };
export default RotateCircleRightFill;
export type { RotateCircleRightFillProps };
