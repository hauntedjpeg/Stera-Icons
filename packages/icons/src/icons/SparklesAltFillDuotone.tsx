import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesAltFillDuotone = memo(
  forwardRef<SVGSVGElement, SparklesAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 1.13c.41 0 .77.28.85.68a6.4 6.4 0 0 0 4.84 4.84.88.88 0 0 1 0 1.7 6.4 6.4 0 0 0-4.84 4.84.88.88 0 0 1-1.7 0 6.4 6.4 0 0 0-4.84-4.84.88.88 0 0 1 0-1.7 6.4 6.4 0 0 0 4.84-4.84c.08-.4.44-.68.85-.68" opacity={.4} />
        <path d="M7.5 10.13c.41 0 .77.28.85.68a6.4 6.4 0 0 0 4.84 4.84.88.88 0 0 1 0 1.7 6.4 6.4 0 0 0-4.84 4.84.88.88 0 0 1-1.7 0 6.4 6.4 0 0 0-4.84-4.84.88.88 0 0 1 0-1.7 6.4 6.4 0 0 0 4.84-4.84c.08-.4.44-.69.85-.69" />
    </IconBase>
  ))
);

SparklesAltFillDuotone.displayName = 'SparklesAltFillDuotone';

// Triple export pattern (lucide-react style)
export { SparklesAltFillDuotone, SparklesAltFillDuotone as SparklesAltFillDuotoneIcon, SparklesAltFillDuotone as SiSparklesAltFillDuotone };
export default SparklesAltFillDuotone;
export type { SparklesAltFillDuotoneProps };
