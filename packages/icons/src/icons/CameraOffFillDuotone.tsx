import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.67 10.73c-.57.59-.92 1.39-.92 2.27 0 1.8 1.46 3.25 3.25 3.25.88 0 1.68-.35 2.26-.93l4.4 4.4q-.67.04-1.66.03H7q-1.03.01-1.7-.04-.7-.04-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-3.66q0-.82.02-1.38t.21-1.05c.33-.82.99-1.47 1.8-1.8q.5-.19 1.06-.21l.48-.02zM13.65 4.25c.34 0 .66 0 .97.08q.37.12.68.36.34.31.61.75l.77 1.11.15.22.03.04q.05.04.1.06h.32q.83 0 1.38.03.56.02 1.05.2c.82.34 1.48 1 1.8 1.81q.2.49.22 1.05.03.55.02 1.38V15q.01 1.03-.04 1.7-.04.6-.24 1.1L8.52 4.87l.18-.17q.31-.24.68-.36c.31-.09.63-.08.97-.08z" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l17 17c.3.3.3.77 0 1.06s-.77.3-1.06 0l-6.2-6.2c-.59.57-1.39.92-2.27.92-1.8 0-3.25-1.45-3.25-3.25 0-.88.35-1.68.92-2.27l-6.2-6.2c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CameraOffFillDuotone.displayName = 'CameraOffFillDuotone';

// Triple export pattern
export { CameraOffFillDuotone, CameraOffFillDuotone as CameraOffFillDuotoneIcon, CameraOffFillDuotone as SiCameraOffFillDuotone };
export default CameraOffFillDuotone;
export type { CameraOffFillDuotoneProps };
