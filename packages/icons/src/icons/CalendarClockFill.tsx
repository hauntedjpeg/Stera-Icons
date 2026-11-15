import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockFillProps = Omit<IconBaseProps, 'children'>;

const CalendarClockFill = memo(
  forwardRef<SVGSVGElement, CalendarClockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2.5c-.41 0-.75.34-.75.75V17q.02.4.33.62l1.5 1c.35.23.81.14 1.04-.2s.14-.81-.2-1.04l-1.17-.78v-1.35c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
        <path d="M15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.2c0 .41-.34.75-.75.75H4.75v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h.7c.41 0 .75.34.75.75s-.34.75-.75.75h-.7q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarClockFill.displayName = 'CalendarClockFill';

// Triple export pattern
export { CalendarClockFill, CalendarClockFill as CalendarClockFillIcon, CalendarClockFill as SiCalendarClockFill };
export default CalendarClockFill;
export type { CalendarClockFillProps };
