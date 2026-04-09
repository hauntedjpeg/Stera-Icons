import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-fill-duotone" {...props}>
      <path d="M13.5 7.13a6.38 6.38 0 0 1 0 12.75H9a.88.88 0 0 1 0-1.75h4.5a4.63 4.63 0 0 0 0-9.25H8.88V7.12z" opacity={.4} />
        <path d="M7.38 3.38a.88.88 0 0 1 1.5.62v8a.88.88 0 0 1-1.5.62l-4-4a.9.9 0 0 1-.06-1.17l.06-.07z" />
    </IconBase>
  ))
);

ArrowULeftTopFillDuotone.displayName = 'ArrowULeftTopFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopFillDuotone, ArrowULeftTopFillDuotone as ArrowULeftTopFillDuotoneIcon, ArrowULeftTopFillDuotone as SiArrowULeftTopFillDuotone };
export default ArrowULeftTopFillDuotone;
export type { ArrowULeftTopFillDuotoneProps };
