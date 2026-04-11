import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockFillProps = Omit<IconBaseProps, 'children'>;

const AlarmClockFill = memo(
  forwardRef<SVGSVGElement, AlarmClockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.12a8.38 8.38 0 0 1 5.56 14.64l1.17 1.75a.88.88 0 0 1-1.46.98l-1.13-1.7a8.3 8.3 0 0 1-8.28 0l-1.13 1.7a.88.88 0 0 1-1.46-.98l1.17-1.75A8.38 8.38 0 0 1 12 4.12m0 3.5c-.48 0-.87.4-.87.88v3.12H8.5a.88.88 0 0 0 0 1.75H12c.48 0 .88-.39.88-.87v-4c0-.48-.4-.88-.88-.88" clipRule="evenodd" />
        <path d="M5.56 1.35a2.4 2.4 0 0 1 3.25.87c.24.42.1.95-.32 1.2l-2.6 1.5a.9.9 0 0 1-1.2-.33 2.4 2.4 0 0 1 .87-3.24M15.2 2.22a2.38 2.38 0 1 1 4.1 2.37.9.9 0 0 1-1.19.32l-2.6-1.5a.9.9 0 0 1-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockFill.displayName = 'AlarmClockFill';

// Triple export pattern (lucide-react style)
export { AlarmClockFill, AlarmClockFill as AlarmClockFillIcon, AlarmClockFill as SiAlarmClockFill };
export default AlarmClockFill;
export type { AlarmClockFillProps };
