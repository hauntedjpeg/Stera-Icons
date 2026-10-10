import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 16.63c.48 0 .88.39.88.87s-.4.88-.88.88H7.38v-1.75zM16.63 8.38H3.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h13.13z" opacity={0.4} />
        <path d="M5.88 12.88c.25-.25.63-.32.95-.19.33.14.54.46.54.81v8c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-4-4c-.32-.32-.34-.83-.06-1.17l.06-.07zM17.16 2.7c.33-.14.7-.07.96.18l4 4 .06.07q.19.24.2.55-.01.36-.26.62l-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-8c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowsLeftRightFillDuotone.displayName = 'ArrowsLeftRightFillDuotone';

// Triple export pattern
export { ArrowsLeftRightFillDuotone, ArrowsLeftRightFillDuotone as ArrowsLeftRightFillDuotoneIcon, ArrowsLeftRightFillDuotone as SiArrowsLeftRightFillDuotone };
export default ArrowsLeftRightFillDuotone;
export type { ArrowsLeftRightFillDuotoneProps };
