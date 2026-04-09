import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-fill-duotone" {...props}>
      <path d="M18 12.13a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6a.88.88 0 0 1 .62-1.5z" />
        <path d="M12 4.13c.48 0 .88.39.88.87v7.13h-1.76V5c0-.48.4-.87.88-.87" opacity={.4} />
    </IconBase>
  ))
);

ArrowDownFillDuotone.displayName = 'ArrowDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownFillDuotone, ArrowDownFillDuotone as ArrowDownFillDuotoneIcon, ArrowDownFillDuotone as SiArrowDownFillDuotone };
export default ArrowDownFillDuotone;
export type { ArrowDownFillDuotoneProps };
