import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBlankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBlankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.75 15.7q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-5.45h17.5z" opacity={.4} />
        <path d="M15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.95H3.25V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarBlankFillDuotone.displayName = 'CalendarBlankFillDuotone';

// Triple export pattern
export { CalendarBlankFillDuotone, CalendarBlankFillDuotone as CalendarBlankFillDuotoneIcon, CalendarBlankFillDuotone as SiCalendarBlankFillDuotone };
export default CalendarBlankFillDuotone;
export type { CalendarBlankFillDuotoneProps };
