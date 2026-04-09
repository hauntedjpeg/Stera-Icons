import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-fill-duotone" {...props}>
      <path d="M16.06 19.04a.87.87 0 1 1 .88 1.51 9.8 9.8 0 0 1-9.88 0 .87.87 0 1 1 .88-1.51 8.1 8.1 0 0 0 8.12 0M3.45 7.06a.87.87 0 1 1 1.51.88 8.1 8.1 0 0 0 0 8.12.87.87 0 1 1-1.51.88 9.8 9.8 0 0 1 0-9.88M19.36 6.74a.87.87 0 0 1 1.2.32 9.8 9.8 0 0 1 0 9.88.87.87 0 1 1-1.52-.88 8.1 8.1 0 0 0 0-8.12.87.87 0 0 1 .32-1.2M12 2.13c1.8 0 3.48.48 4.94 1.32a.87.87 0 1 1-.88 1.51 8.1 8.1 0 0 0-8.12 0 .87.87 0 1 1-.88-1.51A10 10 0 0 1 12 2.12" opacity={0.4} />
        <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0" />
    </IconBase>
  ))
);

CircleDashSimpleFillDuotone.displayName = 'CircleDashSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleFillDuotone, CircleDashSimpleFillDuotone as CircleDashSimpleFillDuotoneIcon, CircleDashSimpleFillDuotone as SiCircleDashSimpleFillDuotone };
export default CircleDashSimpleFillDuotone;
export type { CircleDashSimpleFillDuotoneProps };
