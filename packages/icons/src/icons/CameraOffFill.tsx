import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillProps = Omit<IconBaseProps, 'children'>;

const CameraOffFill = memo(
  forwardRef<SVGSVGElement, CameraOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.38 3.38c.34-.34.9-.34 1.24 0l17 17c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1.82-1.82-.32.03q-.8.06-2.04.04H7.8q-1.24.01-2.04-.04-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.69-.37-1.5-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66.32-1.47 1.47-2.62 2.95-2.95q.17-.04.38-.06L3.38 4.62c-.34-.34-.34-.9 0-1.24M9.76 11c-.47.53-.76 1.23-.76 2 0 1.66 1.34 3 3 3 .77 0 1.47-.29 2-.77z" clipRule="evenodd" />
        <path d="M13.74 4.12q.45-.01.85.1.45.15.81.43c.3.24.5.56.74.9l.7 1.03.08.11.01.02.08.04h.16c.72 0 1.23 0 1.66.09 1.48.33 2.63 1.48 2.95 2.95.1.44.1.94.1 1.66v2.75q.01 1.23-.05 2.04-.05.75-.3 1.37L8.57 4.67l.02-.02q.36-.3.8-.43.42-.11.86-.1z" />
    </IconBase>
  ))
);

CameraOffFill.displayName = 'CameraOffFill';

// Triple export pattern
export { CameraOffFill, CameraOffFill as CameraOffFillIcon, CameraOffFill as SiCameraOffFill };
export default CameraOffFill;
export type { CameraOffFillProps };
