import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.63 12.88H7.38v-1.76h9.25z" opacity={.4} />
        <path d="M5.88 6.88c.25-.25.63-.32.95-.19.33.14.54.46.54.81v9c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-4.5-4.5-.06-.07c-.28-.34-.26-.85.06-1.17zM17.17 6.7c.32-.14.7-.07.95.18l4.5 4.5q.24.26.25.62 0 .31-.2.55l-.05.07-4.5 4.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-9c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowLeftRightFillDuotone.displayName = 'ArrowLeftRightFillDuotone';

// Triple export pattern
export { ArrowLeftRightFillDuotone, ArrowLeftRightFillDuotone as ArrowLeftRightFillDuotoneIcon, ArrowLeftRightFillDuotone as SiArrowLeftRightFillDuotone };
export default ArrowLeftRightFillDuotone;
export type { ArrowLeftRightFillDuotoneProps };
