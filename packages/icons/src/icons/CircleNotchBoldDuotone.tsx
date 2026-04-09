import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-bold-duotone" {...props}>
      <path d="M12 2a1 1 0 1 0 0 2 8 8 0 1 0 8 8 1 1 0 1 0 2 0A10 10 0 1 1 12 2" opacity={.4} />
        <path d="M12 2a10 10 0 0 1 10 10 1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 1 1 0-2" />
    </IconBase>
  ))
);

CircleNotchBoldDuotone.displayName = 'CircleNotchBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchBoldDuotone, CircleNotchBoldDuotone as CircleNotchBoldDuotoneIcon, CircleNotchBoldDuotone as SiCircleNotchBoldDuotone };
export default CircleNotchBoldDuotone;
export type { CircleNotchBoldDuotoneProps };
