import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarXFillProps = Omit<IconBaseProps, 'children'>;

const CalendarXFill = memo(
  forwardRef<SVGSVGElement, CalendarXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.38 11.88a.88.88 0 0 1 1.24 1.24l-1.38 1.38 1.38 1.38a.88.88 0 0 1-1.24 1.24L12 15.74l-1.38 1.38a.88.88 0 0 1-1.24-1.24l1.38-1.38-1.38-1.38a.88.88 0 0 1 1.24-1.24L12 13.26z" />
        <path fillRule="evenodd" d="M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v6.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2a.87.87 0 1 1 1.75 0v1.13h5.24V2c0-.48.4-.87.88-.87M4.88 15.2c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h6.4c.85 0 1.44 0 1.9-.04s.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86.03-.46.04-1.05.04-1.9V9.88H4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarXFill.displayName = 'CalendarXFill';

// Triple export pattern (lucide-react style)
export { CalendarXFill, CalendarXFill as CalendarXFillIcon, CalendarXFill as SiCalendarXFill };
export default CalendarXFill;
export type { CalendarXFillProps };
