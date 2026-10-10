import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 5.13q.36 0 .62.25.25.26.25.62v9c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-3.88-3.88-6.88 6.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l6.88-6.88-3.88-3.88c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ArrowUpRightFill.displayName = 'ArrowUpRightFill';

// Triple export pattern
export { ArrowUpRightFill, ArrowUpRightFill as ArrowUpRightFillIcon, ArrowUpRightFill as SiArrowUpRightFill };
export default ArrowUpRightFill;
export type { ArrowUpRightFillProps };
