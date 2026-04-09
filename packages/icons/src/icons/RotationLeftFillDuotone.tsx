import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-fill-duotone" {...props}>
      <path d="M11.38 1.38a.88.88 0 0 1 1.5.62v2.17a7.87 7.87 0 0 1 5.19 12.85.87.87 0 1 1-1.35-1.12 6.13 6.13 0 0 0-3.85-9.96V8a.88.88 0 0 1-1.49.62l-3-3a.9.9 0 0 1 0-1.24z" />
        <path d="M5.92 7A.88.88 0 0 1 7.27 8.1a6.13 6.13 0 0 0 3.85 9.95V16a.88.88 0 0 1 1.5-.62l3 3c.34.34.34.9 0 1.24l-3 3a.88.88 0 0 1-1.5-.62v-2.18A7.87 7.87 0 0 1 5.92 7" opacity={.4} />
    </IconBase>
  ))
);

RotationLeftFillDuotone.displayName = 'RotationLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftFillDuotone, RotationLeftFillDuotone as RotationLeftFillDuotoneIcon, RotationLeftFillDuotone as SiRotationLeftFillDuotone };
export default RotationLeftFillDuotone;
export type { RotationLeftFillDuotoneProps };
