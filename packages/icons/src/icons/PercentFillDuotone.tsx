import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-fill-duotone" {...props}>
      <path d="M17.5 14.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75M6.5 3.13a3.38 3.38 0 1 1 0 6.75 3.38 3.38 0 0 1 0-6.76" opacity={0.4} />
        <path d="M19.38 3.38a.88.88 0 0 1 1.24 1.24l-16 16a.88.88 0 0 1-1.24-1.24z" />
    </IconBase>
  ))
);

PercentFillDuotone.displayName = 'PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { PercentFillDuotone, PercentFillDuotone as PercentFillDuotoneIcon, PercentFillDuotone as SiPercentFillDuotone };
export default PercentFillDuotone;
export type { PercentFillDuotoneProps };
