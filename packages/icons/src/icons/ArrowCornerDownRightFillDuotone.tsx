import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 4.13c.48 0 .88.39.88.87v8c0 1.17.95 2.13 2.12 2.13h7.13v1.74H8A3.9 3.9 0 0 1 4.13 13V5c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M15.67 11.2c.32-.14.7-.07.95.18l4 4a.9.9 0 0 1 .06 1.17l-.06.07-4 4a.88.88 0 0 1-1.5-.62v-8c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowCornerDownRightFillDuotone.displayName = 'ArrowCornerDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFillDuotone, ArrowCornerDownRightFillDuotone as ArrowCornerDownRightFillDuotoneIcon, ArrowCornerDownRightFillDuotone as SiArrowCornerDownRightFillDuotone };
export default ArrowCornerDownRightFillDuotone;
export type { ArrowCornerDownRightFillDuotoneProps };
