import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-right-fill-duotone" {...props}>
      <path d="M16.63 12.88H7.38v-1.76h9.25z" opacity={.4} />
        <path d="M5.88 6.88a.88.88 0 0 1 1.5.62v9a.88.88 0 0 1-1.5.62l-4.5-4.5-.06-.07a.9.9 0 0 1 .06-1.17zM17.17 6.7c.32-.14.7-.07.95.18l4.5 4.5a.9.9 0 0 1 .06 1.17l-.06.07-4.5 4.5a.88.88 0 0 1-1.5-.62v-9c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowLeftRightFillDuotone.displayName = 'ArrowLeftRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightFillDuotone, ArrowLeftRightFillDuotone as ArrowLeftRightFillDuotoneIcon, ArrowLeftRightFillDuotone as SiArrowLeftRightFillDuotone };
export default ArrowLeftRightFillDuotone;
export type { ArrowLeftRightFillDuotoneProps };
