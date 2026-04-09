import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-fill" {...props}>
      <path d="M18 5.13a.9.9 0 0 1 .87.87v9a.88.88 0 0 1-1.49.62l-3.88-3.88-6.88 6.88a.88.88 0 0 1-1.24-1.24l6.88-6.88-3.88-3.88A.88.88 0 0 1 9 5.12z" />
    </IconBase>
  ))
);

ArrowUpRightFill.displayName = 'ArrowUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowUpRightFill, ArrowUpRightFill as ArrowUpRightFillIcon, ArrowUpRightFill as SiArrowUpRightFill };
export default ArrowUpRightFill;
export type { ArrowUpRightFillProps };
