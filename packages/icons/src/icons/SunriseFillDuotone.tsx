import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SunriseFillDuotone = memo(
  forwardRef<SVGSVGElement, SunriseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20.13a.88.88 0 0 1 0 1.75h-4a.88.88 0 0 1 0-1.75zM18 16.8a.87.87 0 1 1 0 1.74H6a.88.88 0 0 1 0-1.75zM22 13.46a.88.88 0 0 1 0 1.75H2a.87.87 0 1 1 0-1.75z" opacity={0.4} />
        <path d="M12 2.13c4.9 0 8.88 3.97 8.88 8.87 0 .48-.4.88-.88.88H4a.9.9 0 0 1-.87-.88c0-4.9 3.97-8.87 8.87-8.87" />
    </IconBase>
  ))
);

SunriseFillDuotone.displayName = 'SunriseFillDuotone';

// Triple export pattern (lucide-react style)
export { SunriseFillDuotone, SunriseFillDuotone as SunriseFillDuotoneIcon, SunriseFillDuotone as SiSunriseFillDuotone };
export default SunriseFillDuotone;
export type { SunriseFillDuotoneProps };
