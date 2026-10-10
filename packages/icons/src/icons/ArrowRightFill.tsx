import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowRightFill = memo(
  forwardRef<SVGSVGElement, ArrowRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.67 5.2c.32-.14.7-.07.95.18l6 6q.24.26.25.62 0 .36-.25.62l-6 6c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81v-5.13H5c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h7.13V6c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowRightFill.displayName = 'ArrowRightFill';

// Triple export pattern
export { ArrowRightFill, ArrowRightFill as ArrowRightFillIcon, ArrowRightFill as SiArrowRightFill };
export default ArrowRightFill;
export type { ArrowRightFillProps };
