import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.13c.48 0 .88.39.88.87 0 1.93 0 2.69.2 3.27.4 1.26 1.39 2.24 2.65 2.65.58.2 1.34.2 3.27.2h3.13v1.76H11c-1.8 0-2.9 0-3.82-.3C5.4 13.02 4 11.6 3.41 9.83c-.3-.92-.28-2.03-.28-3.82 0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M14.67 7.2c.32-.14.7-.07.95.18l5 5q.24.26.25.62 0 .31-.2.55l-.05.07-5 5c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V8c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowCornerDownRightFillDuotone.displayName = 'ArrowCornerDownRightFillDuotone';

// Triple export pattern
export { ArrowCornerDownRightFillDuotone, ArrowCornerDownRightFillDuotone as ArrowCornerDownRightFillDuotoneIcon, ArrowCornerDownRightFillDuotone as SiArrowCornerDownRightFillDuotone };
export default ArrowCornerDownRightFillDuotone;
export type { ArrowCornerDownRightFillDuotoneProps };
