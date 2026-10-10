import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesAltFillDuotone = memo(
  forwardRef<SVGSVGElement, SparklesAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 1.13c.41 0 .77.28.85.68.54 2.41 2.43 4.3 4.84 4.84.4.08.68.44.68.85s-.28.77-.68.85c-2.41.54-4.3 2.43-4.84 4.84-.08.4-.44.69-.85.69s-.77-.29-.85-.7c-.54-2.4-2.43-4.29-4.84-4.83-.4-.08-.69-.44-.69-.85s.29-.77.7-.85c2.4-.54 4.29-2.43 4.83-4.84.08-.4.44-.68.85-.68" opacity={.4} />
        <path d="M7.5 10.13c.41 0 .77.28.85.68.54 2.41 2.43 4.3 4.84 4.84.4.08.69.44.69.85s-.29.77-.7.85c-2.4.54-4.29 2.43-4.83 4.84-.08.4-.44.68-.85.68s-.77-.28-.85-.68c-.54-2.41-2.43-4.3-4.84-4.84-.4-.08-.68-.44-.68-.85s.28-.77.68-.85c2.41-.54 4.3-2.43 4.84-4.84.08-.4.44-.69.85-.69" />
    </IconBase>
  ))
);

SparklesAltFillDuotone.displayName = 'SparklesAltFillDuotone';

// Triple export pattern
export { SparklesAltFillDuotone, SparklesAltFillDuotone as SparklesAltFillDuotoneIcon, SparklesAltFillDuotone as SiSparklesAltFillDuotone };
export default SparklesAltFillDuotone;
export type { SparklesAltFillDuotoneProps };
