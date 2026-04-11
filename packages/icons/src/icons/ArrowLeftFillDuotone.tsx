import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 11.13a.88.88 0 0 1 0 1.74h-7.12v-1.74z" opacity={.4} />
        <path d="M10.38 5.38a.88.88 0 0 1 1.5.62v12a.88.88 0 0 1-1.5.62l-6-6a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

ArrowLeftFillDuotone.displayName = 'ArrowLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftFillDuotone, ArrowLeftFillDuotone as ArrowLeftFillDuotoneIcon, ArrowLeftFillDuotone as SiArrowLeftFillDuotone };
export default ArrowLeftFillDuotone;
export type { ArrowLeftFillDuotoneProps };
