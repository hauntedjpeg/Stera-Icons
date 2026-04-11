import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.38 5.38a.88.88 0 0 1 1.24 1.24l-6.88 6.88 3.88 3.88a.88.88 0 0 1-.62 1.5H6a.9.9 0 0 1-.87-.88V9a.88.88 0 0 1 1.49-.62l3.88 3.88z" />
    </IconBase>
  ))
);

ArrowDownLeftFill.displayName = 'ArrowDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftFill, ArrowDownLeftFill as ArrowDownLeftFillIcon, ArrowDownLeftFill as SiArrowDownLeftFill };
export default ArrowDownLeftFill;
export type { ArrowDownLeftFillProps };
