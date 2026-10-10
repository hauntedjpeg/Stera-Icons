import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.13 8.88H10.5c-2.55 0-4.62 2.07-4.62 4.62s2.07 4.63 4.62 4.63H15c.48 0 .88.39.88.87s-.4.88-.88.88h-4.5c-3.52 0-6.37-2.86-6.37-6.38s2.85-6.37 6.37-6.37h4.63z" opacity={.4} />
        <path d="M15.67 3.2c.32-.14.7-.07.95.18l4 4 .06.07q.19.24.2.55-.01.36-.26.62l-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81V4c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowURightTopFillDuotone.displayName = 'ArrowURightTopFillDuotone';

// Triple export pattern
export { ArrowURightTopFillDuotone, ArrowURightTopFillDuotone as ArrowURightTopFillDuotoneIcon, ArrowURightTopFillDuotone as SiArrowURightTopFillDuotone };
export default ArrowURightTopFillDuotone;
export type { ArrowURightTopFillDuotoneProps };
