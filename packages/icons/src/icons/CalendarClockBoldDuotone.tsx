import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1l.75.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V9a1 1 0 0 1-1 1H5v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h.7a1 1 0 1 1 0 2h-.7q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1m-6 5a1 1 0 1 1-2 0v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18L16.5 5V6a1 1 0 1 1-2 0V5h-5z" clipRule="evenodd" opacity={.4} />
        <path d="M16.5 13.75a1 1 0 0 1 1 1v1.21l1.05.7a1 1 0 1 1-1.1 1.67l-1.5-1a1 1 0 0 1-.45-.83v-1.75a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M16.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarClockBoldDuotone.displayName = 'CalendarClockBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarClockBoldDuotone, CalendarClockBoldDuotone as CalendarClockBoldDuotoneIcon, CalendarClockBoldDuotone as SiCalendarClockBoldDuotone };
export default CalendarClockBoldDuotone;
export type { CalendarClockBoldDuotoneProps };
