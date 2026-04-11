import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.88 10.4v3.2q.02 1.64-.06 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.87h17.75zM7.74 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.25-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 11.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 1.13c.48 0 .88.39.88.87v1.19a5 5 0 0 1 1.83.47 5 5 0 0 1 2.13 2.13c.44.86.51 1.86.53 3.2l.01.88H3.12L3.13 9c.02-1.34.09-2.34.53-3.2a5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.84-.47V2a.87.87 0 1 1 1.75 0v1.13h5.250000000000001V2c0-.48.39-.87.87-.87M7.75 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

CalendarFillDuotone.displayName = 'CalendarFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFillDuotone, CalendarFillDuotone as CalendarFillDuotoneIcon, CalendarFillDuotone as SiCalendarFillDuotone };
export default CalendarFillDuotone;
export type { CalendarFillDuotoneProps };
