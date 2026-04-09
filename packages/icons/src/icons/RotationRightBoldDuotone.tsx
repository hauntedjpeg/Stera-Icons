import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-bold-duotone" {...props}>
      <path d="M16.77 6.78a1 1 0 0 1 1.4.14 8 8 0 0 1-5.89 13.07L12 20h-.59l1.3 1.3a1 1 0 0 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4l3-3a1 1 0 0 1 1.42 1.4L11.4 18H12a6 6 0 0 0 4.63-9.81 1 1 0 0 1 .14-1.4" opacity={.4} />
        <path d="M11.3 1.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L12.58 6h-.8a6 6 0 0 0-4.41 9.82 1 1 0 0 1-1.54 1.28A8 8 0 0 1 12 4h.59l-1.3-1.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RotationRightBoldDuotone.displayName = 'RotationRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightBoldDuotone, RotationRightBoldDuotone as RotationRightBoldDuotoneIcon, RotationRightBoldDuotone as SiRotationRightBoldDuotone };
export default RotationRightBoldDuotone;
export type { RotationRightBoldDuotoneProps };
