import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFill = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.88 4.25c-.34-.34-.9-.34-1.24 0L7.45 8.81c-.38.38-.38 1 0 1.38l2.43 2.43c.34.34.9.34 1.24 0s.34-.9 0-1.24l-1-1h2.13c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-.97 0-1.83-.48-2.35-1.22-.28-.4-.82-.49-1.22-.21s-.49.82-.2 1.22c.83 1.18 2.2 1.96 3.77 1.96 2.55 0 4.63-2.08 4.63-4.63s-2.08-4.62-4.63-4.62h-2.14l1-1.01c.35-.34.35-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftFill.displayName = 'RotateCircleLeftFill';

// Triple export pattern
export { RotateCircleLeftFill, RotateCircleLeftFill as RotateCircleLeftFillIcon, RotateCircleLeftFill as SiRotateCircleLeftFill };
export default RotateCircleLeftFill;
export type { RotateCircleLeftFillProps };
