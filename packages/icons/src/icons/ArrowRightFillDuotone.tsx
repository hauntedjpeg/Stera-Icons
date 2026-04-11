import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11.13h.13v1.73l-.13.02H5a.88.88 0 0 1 0-1.76z" opacity={.4} />
        <path d="M12.67 5.2c.32-.14.7-.07.95.18l6 6a.9.9 0 0 1 0 1.24l-6 6a.88.88 0 0 1-1.5-.62V6c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowRightFillDuotone.displayName = 'ArrowRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowRightFillDuotone, ArrowRightFillDuotone as ArrowRightFillDuotoneIcon, ArrowRightFillDuotone as SiArrowRightFillDuotone };
export default ArrowRightFillDuotone;
export type { ArrowRightFillDuotoneProps };
