import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V9c0 .55-.45 1-1 1H5v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h.7c.55 0 1 .45 1 1s-.45 1-1 1h-.7q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2c0-.55.45-1 1-1s1 .45 1 1v1h5V2c0-.55.45-1 1-1m-6 5c0 .55-.45 1-1 1s-1-.45-1-1v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03V6c0 .55-.45 1-1 1s-1-.45-1-1V5h-5z" clipRule="evenodd" opacity={.4} />
        <path d="M16.5 13.75c.55 0 1 .45 1 1v1.21l1.05.7c.46.31.59.94.28 1.4s-.93.58-1.38.27l-1.5-1c-.28-.18-.45-.5-.45-.83v-1.75c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M16.5 11c3.04 0 5.5 2.46 5.5 5.5S19.54 22 16.5 22 11 19.54 11 16.5s2.46-5.5 5.5-5.5m0 2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarClockBoldDuotone.displayName = 'CalendarClockBoldDuotone';

// Triple export pattern
export { CalendarClockBoldDuotone, CalendarClockBoldDuotone as CalendarClockBoldDuotoneIcon, CalendarClockBoldDuotone as SiCalendarClockBoldDuotone };
export default CalendarClockBoldDuotone;
export type { CalendarClockBoldDuotoneProps };
