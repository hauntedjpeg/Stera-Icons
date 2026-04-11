import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.09 5.15a1.25 1.25 0 0 1 1.82 1.7l-11.2 12a1.25 1.25 0 0 1-1.82-1.7z" />
        <path d="M3.28 10.12c.57-.4 1.35-.26 1.74.3l3.92 5.6-1.05 1.13c-.41.44-.45 1.1-.11 1.57l-4.8-6.86c-.4-.57-.26-1.35.3-1.74" opacity={.4} />
    </IconBase>
  ))
);

CheckFillDuotone.displayName = 'CheckFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckFillDuotone, CheckFillDuotone as CheckFillDuotoneIcon, CheckFillDuotone as SiCheckFillDuotone };
export default CheckFillDuotone;
export type { CheckFillDuotoneProps };
