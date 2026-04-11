import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFill = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.88 4.25a.9.9 0 0 0-1.24 0L7.45 8.81a1 1 0 0 0 0 1.38l2.43 2.43a.88.88 0 0 0 1.24-1.24l-1-1h2.13A2.88 2.88 0 1 1 9.9 14.9a.88.88 0 0 0-1.43 1 4.62 4.62 0 1 0 3.78-7.28h-2.14l1-1.01a.9.9 0 0 0 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftFill.displayName = 'RotateCircleLeftFill';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftFill, RotateCircleLeftFill as RotateCircleLeftFillIcon, RotateCircleLeftFill as SiRotateCircleLeftFill };
export default RotateCircleLeftFill;
export type { RotateCircleLeftFillProps };
