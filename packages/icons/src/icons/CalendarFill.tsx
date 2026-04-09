import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFillProps = Omit<IconBaseProps, 'children'>;

const CalendarFill = memo(
  forwardRef<SVGSVGElement, CalendarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fill" {...props}>
      <path d="M7.75 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M15.5 1.13c.48 0 .88.39.88.87v1.19a5 5 0 0 1 1.83.47 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.84-.47V2a.87.87 0 1 1 1.75 0v1.13h5.25V2c0-.48.39-.87.87-.87M4.88 10.4v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h3.2c1.13 0 1.93 0 2.56-.06a3 3 0 0 0 1.26-.29q.9-.46 1.36-1.36c.15-.28.24-.65.3-1.26.04-.63.05-1.43.05-2.56V9.87H4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFill.displayName = 'CalendarFill';

// Triple export pattern (lucide-react style)
export { CalendarFill, CalendarFill as CalendarFillIcon, CalendarFill as SiCalendarFill };
export default CalendarFill;
export type { CalendarFillProps };
