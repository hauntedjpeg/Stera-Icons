import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateRightFill = memo(
  forwardRef<SVGSVGElement, RotateRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.17 1.7c.32-.14.7-.07.95.18l3.5 3.5q.24.26.25.62 0 .36-.25.62l-3.5 3.5c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V6.87H12c-3.66 0-6.62 2.97-6.62 6.63s2.96 6.62 6.62 6.62 6.63-2.96 6.63-6.62c0-.48.39-.88.87-.88s.87.4.88.88c0 4.63-3.75 8.37-8.38 8.37s-8.37-3.74-8.37-8.37S7.37 5.12 12 5.12h.63V2.5c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

RotateRightFill.displayName = 'RotateRightFill';

// Triple export pattern
export { RotateRightFill, RotateRightFill as RotateRightFillIcon, RotateRightFill as SiRotateRightFill };
export default RotateRightFill;
export type { RotateRightFillProps };
