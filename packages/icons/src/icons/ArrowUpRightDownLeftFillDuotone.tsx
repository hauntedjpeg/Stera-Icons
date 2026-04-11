import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.75 8.49-8.26 8.26-1.24-1.24 8.26-8.26z" opacity={.4} />
        <path d="M3.67 12.7c.32-.14.7-.07.95.18l6.5 6.5a.88.88 0 0 1-.62 1.5H4a.9.9 0 0 1-.87-.88v-6.5c0-.35.2-.67.54-.8M20 3.13c.48 0 .88.39.88.87v6.5a.88.88 0 0 1-1.5.62l-6.5-6.5a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftFillDuotone.displayName = 'ArrowUpRightDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftFillDuotone, ArrowUpRightDownLeftFillDuotone as ArrowUpRightDownLeftFillDuotoneIcon, ArrowUpRightDownLeftFillDuotone as SiArrowUpRightDownLeftFillDuotone };
export default ArrowUpRightDownLeftFillDuotone;
export type { ArrowUpRightDownLeftFillDuotoneProps };
