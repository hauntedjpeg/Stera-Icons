import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4.13c.48 0 .88.39.88.87s-.4.88-.88.88h-4.5c-2.55 0-4.62 2.07-4.62 4.62s2.07 4.63 4.62 4.63h4.63v1.74H10.5c-3.52 0-6.37-2.85-6.37-6.37s2.85-6.37 6.37-6.37z" opacity={.4} />
        <path d="M15.67 11.2c.32-.14.7-.07.95.18l4 4q.24.26.25.62 0 .31-.2.55l-.05.07-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-8c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowURightFillDuotone.displayName = 'ArrowURightFillDuotone';

// Triple export pattern
export { ArrowURightFillDuotone, ArrowURightFillDuotone as ArrowURightFillDuotoneIcon, ArrowURightFillDuotone as SiArrowURightFillDuotone };
export default ArrowURightFillDuotone;
export type { ArrowURightFillDuotoneProps };
