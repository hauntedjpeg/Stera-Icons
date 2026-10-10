import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.67 5.2c.32-.14.7-.07.95.18l5 5 .06.06q.19.25.2.56-.01.36-.26.62l-5 5c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81v-4.13H11c-1.93 0-2.69.02-3.27.2-1.26.41-2.24 1.4-2.65 2.66-.2.58-.2 1.34-.2 3.27 0 .48-.4.87-.88.87s-.87-.39-.87-.87c0-1.8-.02-2.9.28-3.82C4 12.4 5.4 11 7.18 10.41c.92-.3 2.03-.29 3.82-.29h3.13V6c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ArrowCornerUpRightFill.displayName = 'ArrowCornerUpRightFill';

// Triple export pattern
export { ArrowCornerUpRightFill, ArrowCornerUpRightFill as ArrowCornerUpRightFillIcon, ArrowCornerUpRightFill as SiArrowCornerUpRightFill };
export default ArrowCornerUpRightFill;
export type { ArrowCornerUpRightFillProps };
