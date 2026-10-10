import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.13 11.87H11c-1.93 0-2.69.02-3.27.2-1.26.42-2.24 1.4-2.65 2.66-.2.58-.2 1.34-.2 3.27 0 .48-.4.87-.88.87s-.87-.39-.87-.87c0-1.8-.02-2.9.28-3.82C4 12.4 5.4 11 7.18 10.41c.92-.3 2.03-.29 3.82-.29h3.13z" opacity={.4} />
        <path d="M14.67 5.2c.32-.14.7-.07.95.18l5 5 .06.06q.19.25.2.56-.01.36-.26.62l-5 5c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V6c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowCornerUpRightFillDuotone.displayName = 'ArrowCornerUpRightFillDuotone';

// Triple export pattern
export { ArrowCornerUpRightFillDuotone, ArrowCornerUpRightFillDuotone as ArrowCornerUpRightFillDuotoneIcon, ArrowCornerUpRightFillDuotone as SiArrowCornerUpRightFillDuotone };
export default ArrowCornerUpRightFillDuotone;
export type { ArrowCornerUpRightFillDuotoneProps };
