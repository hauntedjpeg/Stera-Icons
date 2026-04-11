import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4.13a.88.88 0 0 1 0 1.75h-4.5a4.62 4.62 0 1 0 0 9.25h4.63v1.74H10.5a6.38 6.38 0 0 1 0-12.74z" opacity={.4} />
        <path d="M15.67 11.2c.32-.14.7-.07.95.18l4 4a.9.9 0 0 1 .06 1.17l-.06.07-4 4a.88.88 0 0 1-1.5-.62v-8c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowURightFillDuotone.displayName = 'ArrowURightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightFillDuotone, ArrowURightFillDuotone as ArrowURightFillDuotoneIcon, ArrowURightFillDuotone as SiArrowURightFillDuotone };
export default ArrowURightFillDuotone;
export type { ArrowURightFillDuotoneProps };
