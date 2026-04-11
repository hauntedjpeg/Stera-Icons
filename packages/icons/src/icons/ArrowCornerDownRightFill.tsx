import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 4.13c.48 0 .88.39.88.87v8c0 1.17.95 2.13 2.12 2.13h7.13V12a.88.88 0 0 1 1.49-.62l4 4a.9.9 0 0 1 .06 1.17l-.06.07-4 4a.88.88 0 0 1-1.5-.62v-3.12H8A3.9 3.9 0 0 1 4.13 13V5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowCornerDownRightFill.displayName = 'ArrowCornerDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFill, ArrowCornerDownRightFill as ArrowCornerDownRightFillIcon, ArrowCornerDownRightFill as SiArrowCornerDownRightFill };
export default ArrowCornerDownRightFill;
export type { ArrowCornerDownRightFillProps };
