import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraFillProps = Omit<IconBaseProps, 'children'>;

const CameraFill = memo(
  forwardRef<SVGSVGElement, CameraFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.65 4.25c.34 0 .66 0 .97.08q.37.12.68.36.34.32.61.75l.77 1.11.15.22.03.04q.05.04.1.06h.32q.83 0 1.38.03.56.02 1.05.21c.82.33 1.48.98 1.8 1.8q.2.49.22 1.05.03.55.02 1.38V15q.01 1.03-.04 1.7-.04.7-.31 1.28c-.32.6-.81 1.1-1.42 1.42q-.59.28-1.28.31-.67.05-1.7.04H7q-1.03.01-1.7-.04-.7-.04-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-3.66q0-.82.02-1.38t.21-1.05c.33-.82.99-1.47 1.8-1.8q.5-.19 1.06-.21.55-.03 1.38-.02h.26l.05-.01q.06-.01.11-.06l.03-.04.15-.22.77-1.1q.27-.45.61-.76.31-.24.68-.36c.31-.09.63-.08.97-.08zM12 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraFill.displayName = 'CameraFill';

// Triple export pattern
export { CameraFill, CameraFill as CameraFillIcon, CameraFill as SiCameraFill };
export default CameraFill;
export type { CameraFillProps };
