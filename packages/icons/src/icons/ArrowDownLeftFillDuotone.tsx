import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.38 5.38a.88.88 0 0 1 1.24 1.24l-6.88 6.88-1.24-1.24z" opacity={.4} />
        <path d="M5.67 8.2c.32-.14.7-.07.95.18l9 9a.88.88 0 0 1-.62 1.5H6a.9.9 0 0 1-.87-.88V9c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ArrowDownLeftFillDuotone.displayName = 'ArrowDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftFillDuotone, ArrowDownLeftFillDuotone as ArrowDownLeftFillDuotoneIcon, ArrowDownLeftFillDuotone as SiArrowDownLeftFillDuotone };
export default ArrowDownLeftFillDuotone;
export type { ArrowDownLeftFillDuotoneProps };
