import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LampFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LampFillDuotone = memo(
  forwardRef<SVGSVGElement, LampFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lamp-fill-duotone" {...props}>
      <path d="M13 18.26c1.29.34 2.38 1.33 2.38 2.74 0 .48-.4.88-.88.88h-5a.9.9 0 0 1-.87-.88c0-1.4 1.08-2.4 2.37-2.74v-4.39h2z" opacity={.4} />
        <path d="M13.15 2.13c1.46 0 2.8.82 3.46 2.14l3.09 6.17a2.38 2.38 0 0 1-2.13 3.44H6.43a2.38 2.38 0 0 1-2.13-3.44L7.4 4.27c.66-1.32 2-2.14 3.46-2.14z" />
    </IconBase>
  ))
);

LampFillDuotone.displayName = 'LampFillDuotone';

// Triple export pattern (lucide-react style)
export { LampFillDuotone, LampFillDuotone as LampFillDuotoneIcon, LampFillDuotone as SiLampFillDuotone };
export default LampFillDuotone;
export type { LampFillDuotoneProps };
