import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11.13h.13v1.73l-.13.02H5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={.4} />
        <path d="M12.67 5.2c.32-.14.7-.07.95.18l6 6q.24.26.25.62 0 .36-.25.62l-6 6c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V6c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowRightFillDuotone.displayName = 'ArrowRightFillDuotone';

// Triple export pattern
export { ArrowRightFillDuotone, ArrowRightFillDuotone as ArrowRightFillDuotoneIcon, ArrowRightFillDuotone as SiArrowRightFillDuotone };
export default ArrowRightFillDuotone;
export type { ArrowRightFillDuotoneProps };
