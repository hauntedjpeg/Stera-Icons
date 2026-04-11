import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 20.13a.88.88 0 0 1 0 1.75H4a.88.88 0 0 1 0-1.75z" opacity={.4} />
        <path d="M12 2.13c.48 0 .88.39.88.87v6.13h5.03c1.18 0 1.77 1.42.94 2.26L13 17.24a1.4 1.4 0 0 1-1.98 0L5.15 11.4a1.32 1.32 0 0 1 .94-2.27h5.04V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowLineDownFillDuotone.displayName = 'ArrowLineDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineDownFillDuotone, ArrowLineDownFillDuotone as ArrowLineDownFillDuotoneIcon, ArrowLineDownFillDuotone as SiArrowLineDownFillDuotone };
export default ArrowLineDownFillDuotone;
export type { ArrowLineDownFillDuotoneProps };
