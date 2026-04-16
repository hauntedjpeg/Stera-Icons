import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.13 11.87H11c-1.93 0-2.69.02-3.27.2a4.1 4.1 0 0 0-2.65 2.66c-.2.58-.2 1.34-.2 3.27a.87.87 0 1 1-1.75 0c0-1.8-.02-2.9.28-3.82a5.9 5.9 0 0 1 3.77-3.77c.92-.3 2.03-.29 3.82-.29h3.13z" opacity={.4} />
        <path d="M14.67 5.2c.32-.14.7-.07.95.18l5 5 .06.06a.9.9 0 0 1-.06 1.18l-5 5a.88.88 0 0 1-1.5-.62V6c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowCornerUpRightFillDuotone.displayName = 'ArrowCornerUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightFillDuotone, ArrowCornerUpRightFillDuotone as ArrowCornerUpRightFillDuotoneIcon, ArrowCornerUpRightFillDuotone as SiArrowCornerUpRightFillDuotone };
export default ArrowCornerUpRightFillDuotone;
export type { ArrowCornerUpRightFillDuotoneProps };
