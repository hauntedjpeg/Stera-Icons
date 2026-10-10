import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockFillProps = Omit<IconBaseProps, 'children'>;

const CalendarClockFill = memo(
  forwardRef<SVGSVGElement, CalendarClockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 11.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2.38c-.48 0-.87.39-.87.87v1.75q.01.47.38.73l1.5 1c.4.27.95.16 1.22-.24s.16-.95-.24-1.22l-1.11-.74v-1.28c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
        <path d="M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05V9c0 .48-.4.88-.88.88H4.88v5.32c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h.7c.48 0 .88.39.88.87s-.4.88-.88.88h-.7q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2c0-.48.39-.87.87-.87s.88.39.88.87v1.13h5.24V2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

CalendarClockFill.displayName = 'CalendarClockFill';

// Triple export pattern
export { CalendarClockFill, CalendarClockFill as CalendarClockFillIcon, CalendarClockFill as SiCalendarClockFill };
export default CalendarClockFill;
export type { CalendarClockFillProps };
