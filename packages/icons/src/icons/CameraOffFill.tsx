import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillProps = Omit<IconBaseProps, 'children'>;

const CameraOffFill = memo(
  forwardRef<SVGSVGElement, CameraOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.38 3.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-1.82-1.82-.32.03q-.8.06-2.04.04H7.8q-1.24.01-2.04-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66a3.9 3.9 0 0 1 3.33-3L3.38 4.61a.9.9 0 0 1 0-1.24M9.76 11A3 3 0 0 0 14 15.23z" clipRule="evenodd" />
        <path d="M13.74 4.12q.45-.01.85.1.45.15.81.43c.3.24.5.56.74.9l.7 1.03.08.11.01.02.08.04h.16c.72 0 1.23 0 1.66.09a3.9 3.9 0 0 1 2.95 2.95c.1.44.1.94.1 1.66v2.75q.01 1.23-.05 2.04-.05.75-.3 1.37L8.57 4.67l.02-.02a2.4 2.4 0 0 1 1.66-.53z" />
    </IconBase>
  ))
);

CameraOffFill.displayName = 'CameraOffFill';

// Triple export pattern (lucide-react style)
export { CameraOffFill, CameraOffFill as CameraOffFillIcon, CameraOffFill as SiCameraOffFill };
export default CameraOffFill;
export type { CameraOffFillProps };
