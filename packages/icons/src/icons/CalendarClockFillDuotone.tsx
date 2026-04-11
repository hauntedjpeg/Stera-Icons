import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 1.13c.48 0 .88.39.88.87v1.15q.3.01.57.07a4.9 4.9 0 0 1 3.83 3.83c.1.5.1 1.06.1 1.95 0 .48-.4.88-.88.88H4.88v4.62c0 1.46 0 2 .13 2.4.3 1 1.08 1.79 2.08 2.09.42.13.95.14 2.41.14a.88.88 0 0 1 0 1.75c-1.33 0-2.2 0-2.91-.21a4.9 4.9 0 0 1-3.25-3.26c-.22-.72-.21-1.58-.21-2.91V8.9q0-.68.05-1.2a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.84-.47V2a.88.88 0 0 1 1.75 0v1.13h5.25V2c0-.48.39-.87.87-.87" opacity={.4} />
        <path fillRule="evenodd" d="M16.5 11.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2.38c-.48 0-.87.39-.87.87v1.75q.01.47.38.73l1.5 1a.88.88 0 0 0 .98-1.46l-1.11-.74v-1.28c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarClockFillDuotone.displayName = 'CalendarClockFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarClockFillDuotone, CalendarClockFillDuotone as CalendarClockFillDuotoneIcon, CalendarClockFillDuotone as SiCalendarClockFillDuotone };
export default CalendarClockFillDuotone;
export type { CalendarClockFillDuotoneProps };
