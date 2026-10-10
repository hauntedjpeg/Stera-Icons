import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.63 5.13v1.75H12c-3.66 0-6.62 2.96-6.62 6.62s2.96 6.63 6.62 6.63 6.63-2.97 6.63-6.63c0-.48.39-.87.87-.87s.88.39.88.87c0 4.63-3.75 8.38-8.38 8.38s-8.37-3.75-8.37-8.38S7.37 5.13 12 5.13z" opacity={.4} />
        <path d="M13.17 1.7c.32-.14.7-.07.95.18l3.5 3.5q.24.26.25.62 0 .36-.25.62l-3.5 3.5c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81v-7c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

RotateRightFillDuotone.displayName = 'RotateRightFillDuotone';

// Triple export pattern
export { RotateRightFillDuotone, RotateRightFillDuotone as RotateRightFillDuotoneIcon, RotateRightFillDuotone as SiRotateRightFillDuotone };
export default RotateRightFillDuotone;
export type { RotateRightFillDuotoneProps };
