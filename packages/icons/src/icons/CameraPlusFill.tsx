import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraPlusFillProps = Omit<IconBaseProps, 'children'>;

const CameraPlusFill = memo(
  forwardRef<SVGSVGElement, CameraPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.65 4.25c.34 0 .66 0 .97.08q.37.12.68.36.34.31.61.75l.77 1.11.15.22.03.04q.05.04.1.06h.32q.83 0 1.38.03.56.02 1.05.2c.82.34 1.48 1 1.8 1.81q.2.49.22 1.05.03.55.02 1.38V15q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H7q-1.03.01-1.7-.04-.7-.04-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-3.66q0-.82.02-1.38t.21-1.05c.33-.82.99-1.47 1.8-1.8q.5-.19 1.06-.21.55-.04 1.38-.03h.31q.06-.02.11-.06l.03-.04.15-.22.77-1.1q.27-.45.61-.76.31-.24.68-.36c.31-.09.63-.08.97-.08zM12 9c-.41 0-.75.34-.75.75V12H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.25v2.25c0 .41.34.75.75.75s.75-.34.75-.75V13.5H15c.41 0 .75-.34.75-.75S15.41 12 15 12h-2.25V9.75c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraPlusFill.displayName = 'CameraPlusFill';

// Triple export pattern
export { CameraPlusFill, CameraPlusFill as CameraPlusFillIcon, CameraPlusFill as SiCameraPlusFill };
export default CameraPlusFill;
export type { CameraPlusFillProps };
