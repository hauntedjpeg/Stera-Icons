import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusFillProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusFill = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.12a8.38 8.38 0 0 1 5.56 14.64l1.17 1.75a.88.88 0 0 1-1.46.98l-1.13-1.7a8.3 8.3 0 0 1-8.28 0l-1.13 1.7a.88.88 0 0 1-1.46-.98l1.17-1.75A8.38 8.38 0 0 1 12 4.12m-3 7.5a.88.88 0 0 0 0 1.75h6a.88.88 0 0 0 0-1.75z" clipRule="evenodd" />
        <path d="M5.56 1.35a2.4 2.4 0 0 1 3.25.87c.24.42.1.95-.32 1.2l-2.6 1.5a.9.9 0 0 1-1.2-.33 2.4 2.4 0 0 1 .87-3.24M15.2 2.22a2.38 2.38 0 1 1 4.1 2.37.9.9 0 0 1-1.19.32l-2.6-1.5a.9.9 0 0 1-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockMinusFill.displayName = 'AlarmClockMinusFill';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusFill, AlarmClockMinusFill as AlarmClockMinusFillIcon, AlarmClockMinusFill as SiAlarmClockMinusFill };
export default AlarmClockMinusFill;
export type { AlarmClockMinusFillProps };
