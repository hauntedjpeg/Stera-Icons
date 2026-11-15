import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarXFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.75 15.7q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-5.45h17.5zm-6.22-3.23c-.3-.3-.77-.3-1.06 0L12 13.94l-1.47-1.47c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06L10.94 15l-1.47 1.47c-.3.3-.3.77 0 1.06s.77.3 1.06 0L12 16.06l1.47 1.47c.3.3.77.3 1.06 0s.3-.77 0-1.06L13.06 15l1.47-1.47c.3-.3.3-.77 0-1.06" clipRule="evenodd" opacity={.4} />
        <path d="M13.47 12.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L13.06 15l1.47 1.47c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 16.06l-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 15l-1.47-1.47c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 13.94zM15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.95H3.25V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarXFillDuotone.displayName = 'CalendarXFillDuotone';

// Triple export pattern
export { CalendarXFillDuotone, CalendarXFillDuotone as CalendarXFillDuotoneIcon, CalendarXFillDuotone as SiCalendarXFillDuotone };
export default CalendarXFillDuotone;
export type { CalendarXFillDuotoneProps };
