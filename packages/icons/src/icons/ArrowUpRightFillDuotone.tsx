import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.5 11.74-6.88 6.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l6.88-6.88z" opacity={.4} />
        <path d="M18 5.13c.48 0 .87.39.87.87v9c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-9-9c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ArrowUpRightFillDuotone.displayName = 'ArrowUpRightFillDuotone';

// Triple export pattern
export { ArrowUpRightFillDuotone, ArrowUpRightFillDuotone as ArrowUpRightFillDuotoneIcon, ArrowUpRightFillDuotone as SiArrowUpRightFillDuotone };
export default ArrowUpRightFillDuotone;
export type { ArrowUpRightFillDuotoneProps };
