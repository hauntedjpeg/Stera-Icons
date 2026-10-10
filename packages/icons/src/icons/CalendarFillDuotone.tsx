import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.88 15.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V9.88h17.75zM7.74 15c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25S9 16.94 9 16.25 8.44 15 7.75 15M12 15c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S12.69 15 12 15m4.25-.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 11.5c-.69 0-1.25.56-1.25 1.25S11.31 14 12 14s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m4.25 0c-.69 0-1.25.56-1.25 1.25S15.56 14 16.25 14s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v1.07H3.13V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2c0-.48.39-.87.87-.87s.88.39.88.87v1.13h5.24V2c0-.48.4-.87.88-.87M7.75 15c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25S7.06 15 7.75 15M12 15c.69 0 1.25.56 1.25 1.25S12.69 17.5 12 17.5s-1.25-.56-1.25-1.25S11.31 15 12 15M16.25 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 16.69 15 16s.56-1.25 1.25-1.25M12 11.5c.69 0 1.25.56 1.25 1.25S12.69 14 12 14s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16.25 11.5c.69 0 1.25.56 1.25 1.25S16.94 14 16.25 14 15 13.44 15 12.75s.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

CalendarFillDuotone.displayName = 'CalendarFillDuotone';

// Triple export pattern
export { CalendarFillDuotone, CalendarFillDuotone as CalendarFillDuotoneIcon, CalendarFillDuotone as SiCalendarFillDuotone };
export default CalendarFillDuotone;
export type { CalendarFillDuotoneProps };
