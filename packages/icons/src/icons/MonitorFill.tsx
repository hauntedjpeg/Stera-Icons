import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MonitorFillProps = Omit<IconBaseProps, 'children'>;

const MonitorFill = memo(
  forwardRef<SVGSVGElement, MonitorFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 3.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v5.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03h-3.05v2.5h.5c.41 0 .75.34.75.75s-.34.75-.75.75h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5v-2.5H6.7q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03z" />
    </IconBase>
  ))
);

MonitorFill.displayName = 'MonitorFill';

// Triple export pattern
export { MonitorFill, MonitorFill as MonitorFillIcon, MonitorFill as SiMonitorFill };
export default MonitorFill;
export type { MonitorFillProps };
