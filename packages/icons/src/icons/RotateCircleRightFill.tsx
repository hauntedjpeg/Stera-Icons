import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFill = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c-5.45 0-9.87 4.42-9.87 9.87s4.42 9.88 9.87 9.88 9.88-4.43 9.88-9.88S17.45 2.13 12 2.13m.88 4.25c.34-.34.9-.34 1.24 0l2.43 2.43c.38.38.38 1 0 1.38l-2.43 2.43c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1-1h-2.13c-1.59 0-2.87 1.28-2.87 2.87s1.28 2.88 2.87 2.88c.97 0 1.83-.48 2.35-1.22.28-.4.82-.49 1.22-.21s.49.82.2 1.22c-.83 1.18-2.2 1.96-3.77 1.96-2.55 0-4.62-2.08-4.62-4.63s2.07-4.62 4.62-4.62h2.14l-1-1.01c-.35-.34-.35-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightFill.displayName = 'RotateCircleRightFill';

// Triple export pattern
export { RotateCircleRightFill, RotateCircleRightFill as RotateCircleRightFillIcon, RotateCircleRightFill as SiRotateCircleRightFill };
export default RotateCircleRightFill;
export type { RotateCircleRightFillProps };
