import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 4.13q.45-.02.85.1.45.13.81.42c.3.24.5.56.74.9l.7 1.03.08.12q.03.03.01 0 .03.04.08.05h.16c.72 0 1.23 0 1.66.1 1.48.32 2.63 1.47 2.95 2.94.1.44.1.94.1 1.66v2.75q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66.32-1.47 1.47-2.62 2.95-2.95.43-.1.94-.09 1.66-.09h.16q.05 0 .08-.04V6.7l.09-.12.7-1.03c.23-.34.44-.66.74-.9q.36-.3.8-.43.42-.11.86-.1zM12 9.75c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.45-3.25-3.25-3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.75c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25" />
    </IconBase>
  ))
);

CameraFillDuotone.displayName = 'CameraFillDuotone';

// Triple export pattern
export { CameraFillDuotone, CameraFillDuotone as CameraFillDuotoneIcon, CameraFillDuotone as SiCameraFillDuotone };
export default CameraFillDuotone;
export type { CameraFillDuotoneProps };
