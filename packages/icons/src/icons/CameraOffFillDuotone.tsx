import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.59 10.83a3.25 3.25 0 0 0 4.59 4.59l4.38 4.38-.32.03q-.8.06-2.04.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66a3.9 3.9 0 0 1 3.32-3zM13.74 4.13q.45-.02.85.1.45.13.81.42c.3.24.5.56.74.9l.7 1.03.08.12q.03.03.01 0 .03.05.08.05h.16c.72 0 1.23 0 1.66.1a3.9 3.9 0 0 1 2.95 2.94c.1.44.1.94.1 1.66v2.75q.01 1.24-.05 2.04-.05.75-.3 1.37L8.57 4.67l.02-.02a2.4 2.4 0 0 1 1.66-.53z" opacity={0.4} />
        <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-6.2-6.2a3.25 3.25 0 0 1-4.59-4.59L3.38 4.61a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

CameraOffFillDuotone.displayName = 'CameraOffFillDuotone';

// Triple export pattern (lucide-react style)
export { CameraOffFillDuotone, CameraOffFillDuotone as CameraOffFillDuotoneIcon, CameraOffFillDuotone as SiCameraOffFillDuotone };
export default CameraOffFillDuotone;
export type { CameraOffFillDuotoneProps };
