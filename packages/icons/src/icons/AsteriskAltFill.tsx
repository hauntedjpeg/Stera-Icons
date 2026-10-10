import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltFillProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltFill = memo(
  forwardRef<SVGSVGElement, AsteriskAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c.75 0 1.46.26 1.95.73.48.47.73 1.1.55 1.77l-.2.75q-.33 1.4-.52 2.8c-.06.42.42.7.76.43q1.1-.87 2.14-1.85l.56-.54c.49-.49 1.16-.6 1.8-.4.66.18 1.24.66 1.61 1.31.38.66.5 1.4.34 2.06-.16.65-.59 1.18-1.25 1.36l-.74.21q-1.38.4-2.68.94c-.4.16-.4.7 0 .87q1.31.53 2.68.94l.75.2c.66.19 1.09.72 1.25 1.37.17.66.04 1.4-.34 2.05-.37.66-.96 1.14-1.6 1.33-.65.18-1.33.07-1.81-.41l-.56-.54q-1.04-1-2.15-1.85c-.34-.27-.82 0-.76.43l.12.78q.18 1 .41 2.01l.19.75c.18.66-.07 1.3-.55 1.77S12.75 22 12 22s-1.46-.26-1.95-.73c-.48-.47-.73-1.1-.55-1.77l.19-.75q.15-.64.27-1.28.15-.75.26-1.51c.06-.43-.42-.7-.76-.44q-1.11.87-2.16 1.86l-.55.54c-.49.49-1.16.6-1.8.4-.66-.18-1.24-.66-1.62-1.32-.37-.65-.5-1.4-.34-2.05.17-.65.6-1.18 1.26-1.36l.74-.21q1.38-.41 2.7-.94c.4-.16.4-.71 0-.87q-1.31-.54-2.69-.94l-.74-.21c-.67-.18-1.1-.7-1.26-1.36s-.03-1.4.34-2.06c.38-.65.96-1.13 1.61-1.32.65-.18 1.32-.08 1.8.4l.56.55q1.04 1 2.15 1.85c.34.27.82 0 .76-.43q-.19-1.4-.53-2.8-.09-.37-.2-.75c-.17-.66.08-1.3.56-1.77S11.25 2 12 2" />
    </IconBase>
  ))
);

AsteriskAltFill.displayName = 'AsteriskAltFill';

// Triple export pattern
export { AsteriskAltFill, AsteriskAltFill as AsteriskAltFillIcon, AsteriskAltFill as SiAsteriskAltFill };
export default AsteriskAltFill;
export type { AsteriskAltFillProps };
