import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-fill-duotone" {...props}>
      <path d="M16.85 6.88a.9.9 0 0 1 1.23.12 7.88 7.88 0 0 1-5.2 12.83V22a.88.88 0 0 1-1.5.62l-3-3a.9.9 0 0 1 0-1.24l3-3a.88.88 0 0 1 1.5.62v2.06a6.12 6.12 0 0 0 3.85-9.95.9.9 0 0 1 .12-1.23" opacity={.4} />
        <path d="M11.67 1.2c.32-.14.7-.07.95.18l3 3c.34.34.34.9 0 1.24l-3 3a.88.88 0 0 1-1.5-.62V5.94a6.12 6.12 0 0 0-3.84 9.96.87.87 0 0 1-1.35 1.12 7.87 7.87 0 0 1 5.2-12.85V2c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

RotationRightFillDuotone.displayName = 'RotationRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightFillDuotone, RotationRightFillDuotone as RotationRightFillDuotoneIcon, RotationRightFillDuotone as SiRotationRightFillDuotone };
export default RotationRightFillDuotone;
export type { RotationRightFillDuotoneProps };
