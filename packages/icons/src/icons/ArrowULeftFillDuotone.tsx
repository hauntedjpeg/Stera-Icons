import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-fill-duotone" {...props}>
      <path d="M13.5 4.13a6.38 6.38 0 0 1 0 12.75H8.88v-1.75h4.62a4.63 4.63 0 0 0 0-9.26H9a.87.87 0 1 1 0-1.74z" opacity={.4} />
        <path d="M7.38 11.38a.88.88 0 0 1 1.5.62v8a.88.88 0 0 1-1.5.62l-4-4-.06-.07a.9.9 0 0 1 .06-1.17z" />
    </IconBase>
  ))
);

ArrowULeftFillDuotone.displayName = 'ArrowULeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftFillDuotone, ArrowULeftFillDuotone as ArrowULeftFillDuotoneIcon, ArrowULeftFillDuotone as SiArrowULeftFillDuotone };
export default ArrowULeftFillDuotone;
export type { ArrowULeftFillDuotoneProps };
