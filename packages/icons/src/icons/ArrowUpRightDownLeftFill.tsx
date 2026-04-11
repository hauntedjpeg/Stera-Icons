import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 3.13c.48 0 .88.39.88.87v6.5a.88.88 0 0 1-1.5.62l-2.63-2.63-8.26 8.26 2.63 2.63a.88.88 0 0 1-.62 1.5H4a.9.9 0 0 1-.87-.88v-6.5a.88.88 0 0 1 1.49-.62l2.63 2.63 8.26-8.26-2.63-2.63a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftFill.displayName = 'ArrowUpRightDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftFill, ArrowUpRightDownLeftFill as ArrowUpRightDownLeftFillIcon, ArrowUpRightDownLeftFill as SiArrowUpRightDownLeftFill };
export default ArrowUpRightDownLeftFill;
export type { ArrowUpRightDownLeftFillProps };
