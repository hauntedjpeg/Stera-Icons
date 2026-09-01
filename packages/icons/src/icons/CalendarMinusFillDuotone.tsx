import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.88 15.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V9.88h17.75zM9.5 13.63a.88.88 0 0 0 0 1.74h5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 13.63a.88.88 0 0 1 0 1.74h-5a.88.88 0 0 1 0-1.74zM15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v1.07H3.13V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2a.87.87 0 1 1 1.75 0v1.13h5.24V2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

CalendarMinusFillDuotone.displayName = 'CalendarMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarMinusFillDuotone, CalendarMinusFillDuotone as CalendarMinusFillDuotoneIcon, CalendarMinusFillDuotone as SiCalendarMinusFillDuotone };
export default CalendarMinusFillDuotone;
export type { CalendarMinusFillDuotoneProps };
