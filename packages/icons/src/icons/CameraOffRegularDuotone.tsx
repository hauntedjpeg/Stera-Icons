import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m7.28 8.34-.07.02q-.2.03-.38.02c-.81 0-1.1 0-1.31.05-.86.19-1.53.86-1.72 1.71-.05.22-.05.5-.05 1.31v2.75c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h9.38l1.42 1.41c-.62.1-1.4.09-2.4.09H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-2.75c0-.73 0-1.21.09-1.63.31-1.43 1.43-2.54 2.85-2.86q.29-.06.64-.07zM13.74 4.25q.44-.01.81.1.43.13.77.4c.28.22.48.52.71.87l.7 1.03q.06.09.1.12l.01.02q.07.08.15.08h.18c.73 0 1.22 0 1.64.1 1.42.3 2.54 1.42 2.85 2.85.1.42.09.9.09 1.63v2.75c0 1.1 0 1.94-.11 2.59-.07.4-.46.68-.87.6-.41-.07-.68-.46-.61-.87.09-.48.09-1.15.09-2.32v-2.75c0-.8 0-1.09-.05-1.3-.2-.86-.86-1.53-1.72-1.72-.22-.05-.5-.05-1.3-.05q-.2 0-.39-.02c-.4-.06-.78-.25-1.06-.56q-.13-.15-.23-.3l-.7-1.03c-.3-.42-.35-.5-.42-.55q-.1-.1-.26-.14c-.08-.02-.18-.03-.68-.03h-2.88c-.5 0-.6 0-.68.03l-.13.05c-.37.2-.83.05-1.02-.32s-.04-.82.33-1q.18-.1.39-.17.37-.1.81-.09z" opacity={0.4} />
        <path d="M10.73 11.8c-.3.3-.48.73-.48 1.2 0 .97.78 1.75 1.75 1.75.47 0 .9-.18 1.2-.48l1.07 1.06c-.59.57-1.39.92-2.27.92-1.8 0-3.25-1.46-3.25-3.25 0-.88.35-1.68.92-2.27z" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l17 17c.3.3.3.77 0 1.06s-.77.3-1.06 0l-17-17c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CameraOffRegularDuotone.displayName = 'CameraOffRegularDuotone';

// Triple export pattern
export { CameraOffRegularDuotone, CameraOffRegularDuotone as CameraOffRegularDuotoneIcon, CameraOffRegularDuotone as SiCameraOffRegularDuotone };
export default CameraOffRegularDuotone;
export type { CameraOffRegularDuotoneProps };
