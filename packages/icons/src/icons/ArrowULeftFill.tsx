import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 4.13a6.38 6.38 0 0 1 0 12.75H8.88V20a.88.88 0 0 1-1.5.62l-4-4-.06-.07a.9.9 0 0 1 .06-1.17l4-4a.88.88 0 0 1 1.5.62v3.13h4.62a4.63 4.63 0 0 0 0-9.26H9a.87.87 0 1 1 0-1.74z" />
    </IconBase>
  ))
);

ArrowULeftFill.displayName = 'ArrowULeftFill';

// Triple export pattern (lucide-react style)
export { ArrowULeftFill, ArrowULeftFill as ArrowULeftFillIcon, ArrowULeftFill as SiArrowULeftFill };
export default ArrowULeftFill;
export type { ArrowULeftFillProps };
