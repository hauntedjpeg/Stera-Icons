import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 7.13A3.9 3.9 0 0 1 19.88 11v8a.88.88 0 0 1-1.75 0v-8c0-1.17-.96-2.12-2.13-2.12H8.88V7.12z" opacity={.4} />
        <path d="M7.38 3.38a.88.88 0 0 1 1.5.62v8a.88.88 0 0 1-1.5.62l-4-4a.9.9 0 0 1-.06-1.17l.06-.07z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFillDuotone.displayName = 'ArrowCornerUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFillDuotone, ArrowCornerUpLeftFillDuotone as ArrowCornerUpLeftFillDuotoneIcon, ArrowCornerUpLeftFillDuotone as SiArrowCornerUpLeftFillDuotone };
export default ArrowCornerUpLeftFillDuotone;
export type { ArrowCornerUpLeftFillDuotoneProps };
