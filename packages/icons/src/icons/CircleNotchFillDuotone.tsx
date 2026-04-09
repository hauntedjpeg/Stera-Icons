import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-fill-duotone" {...props}>
      <path d="M12 1.75a1.25 1.25 0 1 0 0 2.5A7.75 7.75 0 1 0 19.75 12a1.25 1.25 0 1 0 2.5 0A10.25 10.25 0 1 1 12 1.75" opacity={.4} />
        <path d="M12 1.75A10.25 10.25 0 0 1 22.25 12a1.25 1.25 0 1 1-2.5 0A7.75 7.75 0 0 0 12 4.25a1.25 1.25 0 1 1 0-2.5" />
    </IconBase>
  ))
);

CircleNotchFillDuotone.displayName = 'CircleNotchFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchFillDuotone, CircleNotchFillDuotone as CircleNotchFillDuotoneIcon, CircleNotchFillDuotone as SiCircleNotchFillDuotone };
export default CircleNotchFillDuotone;
export type { CircleNotchFillDuotoneProps };
