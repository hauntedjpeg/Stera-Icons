import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraPlusFillProps = Omit<IconBaseProps, 'children'>;

const CameraPlusFill = memo(
  forwardRef<SVGSVGElement, CameraPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 4.13q.45-.02.85.1.45.13.81.42c.3.24.5.56.74.9l.7 1.03.08.12q.03.03.01 0 .03.04.08.05h.16c.72 0 1.23 0 1.66.1 1.48.32 2.63 1.47 2.95 2.94.1.44.1.94.1 1.66v2.75q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-2.75c0-.72-.01-1.22.09-1.66.32-1.47 1.47-2.62 2.95-2.95.43-.1.94-.09 1.66-.09h.16q.05 0 .08-.04V6.7l.09-.12.7-1.03c.23-.34.44-.66.74-.9q.36-.3.8-.43.42-.11.86-.1zM12 8.63c-.48 0-.87.39-.87.87v2.13H9c-.48 0-.87.39-.87.87s.39.88.87.88h2.13v2.12c0 .48.39.88.87.88s.88-.4.88-.88v-2.12H15c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraPlusFill.displayName = 'CameraPlusFill';

// Triple export pattern
export { CameraPlusFill, CameraPlusFill as CameraPlusFillIcon, CameraPlusFill as SiCameraPlusFill };
export default CameraPlusFill;
export type { CameraPlusFillProps };
