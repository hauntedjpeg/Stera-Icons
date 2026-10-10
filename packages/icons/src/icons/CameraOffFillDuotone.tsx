import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.59 10.83c-.52.57-.84 1.33-.84 2.17 0 1.8 1.46 3.25 3.25 3.25.84 0 1.6-.32 2.17-.84l4.39 4.39-.32.03q-.8.06-2.04.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66.32-1.47 1.47-2.62 2.95-2.95q.18-.04.37-.06zM13.74 4.13q.45-.02.85.1.45.13.81.42c.3.24.5.56.74.9l.7 1.03.08.12q.03.03.01 0 .03.05.08.05h.16c.72 0 1.23 0 1.66.1 1.48.32 2.63 1.47 2.95 2.94.1.44.1.94.1 1.66v2.75q.01 1.24-.05 2.04-.05.75-.3 1.37L8.57 4.67l.02-.02q.36-.3.8-.43.42-.11.86-.1z" opacity={0.4} />
        <path d="M3.38 3.38c.34-.34.9-.34 1.24 0l17 17c.34.34.34.9 0 1.24s-.9.34-1.24 0l-6.2-6.2c-.58.51-1.34.83-2.18.83-1.8 0-3.25-1.46-3.25-3.25 0-.84.32-1.6.84-2.18l-6.21-6.2c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

CameraOffFillDuotone.displayName = 'CameraOffFillDuotone';

// Triple export pattern
export { CameraOffFillDuotone, CameraOffFillDuotone as CameraOffFillDuotoneIcon, CameraOffFillDuotone as SiCameraOffFillDuotone };
export default CameraOffFillDuotone;
export type { CameraOffFillDuotoneProps };
