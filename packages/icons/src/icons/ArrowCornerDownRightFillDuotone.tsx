import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.13c.48 0 .88.39.88.87 0 1.93 0 2.69.2 3.27a4.1 4.1 0 0 0 2.65 2.65c.58.2 1.34.2 3.27.2h3.13v1.76H11c-1.8 0-2.9 0-3.82-.3a5.9 5.9 0 0 1-3.77-3.76c-.3-.92-.28-2.03-.28-3.82 0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M14.67 7.2c.32-.14.7-.07.95.18l5 5a.9.9 0 0 1 .06 1.17l-.06.07-5 5a.88.88 0 0 1-1.5-.62V8c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowCornerDownRightFillDuotone.displayName = 'ArrowCornerDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFillDuotone, ArrowCornerDownRightFillDuotone as ArrowCornerDownRightFillDuotoneIcon, ArrowCornerDownRightFillDuotone as SiArrowCornerDownRightFillDuotone };
export default ArrowCornerDownRightFillDuotone;
export type { ArrowCornerDownRightFillDuotoneProps };
