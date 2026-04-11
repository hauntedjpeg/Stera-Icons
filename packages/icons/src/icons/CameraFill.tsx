import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraFillProps = Omit<IconBaseProps, 'children'>;

const CameraFill = memo(
  forwardRef<SVGSVGElement, CameraFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 4.13q.45-.02.85.1.45.13.81.42c.3.24.5.56.74.9l.7 1.03.08.12q.03.03.01 0 .03.04.08.05h.16c.72 0 1.23 0 1.66.1a3.9 3.9 0 0 1 2.95 2.94c.1.44.1.94.1 1.66v2.75q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66a3.9 3.9 0 0 1 2.95-2.95c.43-.1.94-.09 1.66-.09h.16q.05 0 .08-.04V6.7l.09-.12.7-1.03c.23-.34.44-.66.74-.9a2.4 2.4 0 0 1 1.66-.53zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraFill.displayName = 'CameraFill';

// Triple export pattern (lucide-react style)
export { CameraFill, CameraFill as CameraFillIcon, CameraFill as SiCameraFill };
export default CameraFill;
export type { CameraFillProps };
