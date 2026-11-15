import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillProps = Omit<IconBaseProps, 'children'>;

const CameraOffFill = memo(
  forwardRef<SVGSVGElement, CameraOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.47 3.47c.3-.3.77-.3 1.06 0l2.91 2.91.01-.01 3.75 3.74h-.02l3.7 3.71v-.02l5.41 5.4-.01.02 1.25 1.25c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.81-1.81q-.67.04-1.66.03H7q-1.03.01-1.7-.04-.7-.04-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-3.66q0-.82.02-1.38t.21-1.05c.33-.82.99-1.47 1.8-1.8q.5-.19 1.06-.21l.48-.02-2.35-2.35c-.3-.3-.3-.77 0-1.06m6.38 7.44C9.32 11.45 9 12.2 9 13c0 1.66 1.34 3 3 3 .81 0 1.55-.33 2.09-.85z" clipRule="evenodd" />
        <path d="M13.65 4.25q.5-.02.97.08.37.12.68.36.34.32.61.75l.77 1.11.15.22.03.04q.05.04.1.06h.32q.83 0 1.38.03.56.02 1.05.2c.82.34 1.48 1 1.8 1.81q.2.49.22 1.05.03.55.02 1.38V15q.01 1.03-.04 1.7-.02.5-.17.93L8.65 4.73q.03 0 .05-.04.31-.24.68-.36c.31-.09.63-.08.97-.08z" />
    </IconBase>
  ))
);

CameraOffFill.displayName = 'CameraOffFill';

// Triple export pattern
export { CameraOffFill, CameraOffFill as CameraOffFillIcon, CameraOffFill as SiCameraOffFill };
export default CameraOffFill;
export type { CameraOffFillProps };
