import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBlankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBlankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.88 15.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V9.88h17.75z" opacity={.4} />
        <path d="M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v1.07H3.13V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2a.87.87 0 1 1 1.75 0v1.13h5.24V2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

CalendarBlankFillDuotone.displayName = 'CalendarBlankFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarBlankFillDuotone, CalendarBlankFillDuotone as CalendarBlankFillDuotoneIcon, CalendarBlankFillDuotone as SiCalendarBlankFillDuotone };
export default CalendarBlankFillDuotone;
export type { CalendarBlankFillDuotoneProps };
