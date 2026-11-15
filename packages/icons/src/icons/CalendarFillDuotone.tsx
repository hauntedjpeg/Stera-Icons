import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.75 15.7q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-5.45h17.5zm-13-.2c-.69 0-1.25.56-1.25 1.25S7.06 18 7.75 18 9 17.44 9 16.75s-.56-1.25-1.25-1.25m4.25 0c-.69 0-1.25.56-1.25 1.25S11.31 18 12 18s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m4.25-.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 12c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S12.69 12 12 12m4.25 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S16.94 12 16.25 12" clipRule="evenodd" opacity={.4} />
        <path d="M7.75 15.5c.69 0 1.25.56 1.25 1.25S8.44 18 7.75 18s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 15.5c.69 0 1.25.56 1.25 1.25S12.69 18 12 18s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16.25 15.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 17.19 15 16.5s.56-1.25 1.25-1.25M12 12c.69 0 1.25.56 1.25 1.25S12.69 14.5 12 14.5s-1.25-.56-1.25-1.25S11.31 12 12 12M16.25 12c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 13.94 15 13.25 15.56 12 16.25 12M15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.95H3.25V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarFillDuotone.displayName = 'CalendarFillDuotone';

// Triple export pattern
export { CalendarFillDuotone, CalendarFillDuotone as CalendarFillDuotoneIcon, CalendarFillDuotone as SiCalendarFillDuotone };
export default CalendarFillDuotone;
export type { CalendarFillDuotoneProps };
