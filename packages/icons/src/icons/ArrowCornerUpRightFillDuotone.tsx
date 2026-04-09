import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-fill-duotone" {...props}>
      <path d="M15.13 8.88H8c-1.17 0-2.12.95-2.12 2.12v8a.88.88 0 0 1-1.75 0v-8A3.9 3.9 0 0 1 8 7.13h7.13z" opacity={.4} />
        <path d="M15.67 3.2c.32-.14.7-.07.95.18l4 4 .06.07a.9.9 0 0 1-.06 1.17l-4 4a.88.88 0 0 1-1.5-.62V4c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowCornerUpRightFillDuotone.displayName = 'ArrowCornerUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightFillDuotone, ArrowCornerUpRightFillDuotone as ArrowCornerUpRightFillDuotoneIcon, ArrowCornerUpRightFillDuotone as SiArrowCornerUpRightFillDuotone };
export default ArrowCornerUpRightFillDuotone;
export type { ArrowCornerUpRightFillDuotoneProps };
