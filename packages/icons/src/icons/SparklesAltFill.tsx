import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltFillProps = Omit<IconBaseProps, 'children'>;

const SparklesAltFill = memo(
  forwardRef<SVGSVGElement, SparklesAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-alt-fill" {...props}>
      <path d="M7.5 10.13c.41 0 .77.28.85.68a6.4 6.4 0 0 0 4.84 4.84.88.88 0 0 1 0 1.7 6.4 6.4 0 0 0-4.84 4.84.88.88 0 0 1-1.7 0 6.4 6.4 0 0 0-4.84-4.84.88.88 0 0 1 0-1.7 6.4 6.4 0 0 0 4.84-4.84c.08-.4.44-.69.85-.69M16.5 1.13c.41 0 .77.28.85.68a6.4 6.4 0 0 0 4.84 4.84.88.88 0 0 1 0 1.7 6.4 6.4 0 0 0-4.84 4.84.88.88 0 0 1-1.7 0 6.4 6.4 0 0 0-4.84-4.84.88.88 0 0 1 0-1.7 6.4 6.4 0 0 0 4.84-4.84c.08-.4.44-.68.85-.68" />
    </IconBase>
  ))
);

SparklesAltFill.displayName = 'SparklesAltFill';

// Triple export pattern (lucide-react style)
export { SparklesAltFill, SparklesAltFill as SparklesAltFillIcon, SparklesAltFill as SiSparklesAltFill };
export default SparklesAltFill;
export type { SparklesAltFillProps };
