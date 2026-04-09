import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowRightFill = memo(
  forwardRef<SVGSVGElement, ArrowRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-right-fill" {...props}>
      <path d="M12.67 5.2c.32-.14.7-.07.95.18l6 6a.9.9 0 0 1 0 1.24l-6 6a.88.88 0 0 1-1.5-.62v-5.13H5a.87.87 0 1 1 0-1.75h7.13V6c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowRightFill.displayName = 'ArrowRightFill';

// Triple export pattern (lucide-react style)
export { ArrowRightFill, ArrowRightFill as ArrowRightFillIcon, ArrowRightFill as SiArrowRightFill };
export default ArrowRightFill;
export type { ArrowRightFillProps };
