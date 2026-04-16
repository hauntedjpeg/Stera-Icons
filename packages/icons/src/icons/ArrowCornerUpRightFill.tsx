import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.67 5.2c.32-.14.7-.07.95.18l5 5 .06.06a.9.9 0 0 1-.06 1.18l-5 5a.88.88 0 0 1-1.5-.62v-4.13H11c-1.93 0-2.69.02-3.27.2a4.1 4.1 0 0 0-2.65 2.66c-.2.58-.2 1.34-.2 3.27a.87.87 0 1 1-1.75 0c0-1.8-.02-2.9.28-3.82a5.9 5.9 0 0 1 3.77-3.77c.92-.3 2.03-.29 3.82-.29h3.13V6c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ArrowCornerUpRightFill.displayName = 'ArrowCornerUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightFill, ArrowCornerUpRightFill as ArrowCornerUpRightFillIcon, ArrowCornerUpRightFill as SiArrowCornerUpRightFill };
export default ArrowCornerUpRightFill;
export type { ArrowCornerUpRightFillProps };
