import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.88 15.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V9.88h17.75zM12 11.13c-.48 0-.87.39-.87.87v1.63H9.5c-.48 0-.87.39-.87.87s.39.88.87.88h1.63V17c0 .48.39.88.87.88s.88-.4.88-.88v-1.62h1.62c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.62V12c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.13c.48 0 .88.39.88.87v1.63h1.62c.48 0 .88.39.88.87s-.4.88-.88.88h-1.62V17c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-1.62H9.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1.63V12c0-.48.39-.87.87-.87M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v1.07H3.13V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2c0-.48.39-.87.87-.87s.88.39.88.87v1.13h5.24V2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

CalendarPlusFillDuotone.displayName = 'CalendarPlusFillDuotone';

// Triple export pattern
export { CalendarPlusFillDuotone, CalendarPlusFillDuotone as CalendarPlusFillDuotoneIcon, CalendarPlusFillDuotone as SiCalendarPlusFillDuotone };
export default CalendarPlusFillDuotone;
export type { CalendarPlusFillDuotoneProps };
