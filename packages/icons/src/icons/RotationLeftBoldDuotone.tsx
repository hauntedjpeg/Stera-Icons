import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.82 6.92a1 1 0 0 1 1.55 1.27A6 6 0 0 0 12 18h.59l-1.3-1.3a1 1 0 0 1 1.42-1.4l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.42-1.4l1.3-1.3h-.6A8 8 0 0 1 5.83 6.92" opacity={.4} />
        <path d="M11.3 1.3a1 1 0 1 1 1.4 1.4L11.42 4h.87a8 8 0 0 1 5.88 13.1 1 1 0 0 1-1.54-1.28A6 6 0 0 0 12.22 6h-.81l1.3 1.3a1 1 0 0 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftBoldDuotone.displayName = 'RotationLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftBoldDuotone, RotationLeftBoldDuotone as RotationLeftBoldDuotoneIcon, RotationLeftBoldDuotone as SiRotationLeftBoldDuotone };
export default RotationLeftBoldDuotone;
export type { RotationLeftBoldDuotoneProps };
