import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffFillProps = Omit<IconBaseProps, 'children'>;

const CalendarOffFill = memo(
  forwardRef<SVGSVGElement, CalendarOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.47 2.97c.3-.3.77-.3 1.06 0l18 18c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.4-1.4q-.18.11-.37.21c-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47q.09-.2.21-.37l-1.4-1.4c-.3-.3-.3-.77 0-1.06m2.28 7.28v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.42-.03.68-.1.87-.18l-9.28-9.28z" clipRule="evenodd" />
        <path d="M15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q0 1.1-.03 1.85l-1.47-1.47v-5.83h-5.84L6.95 3.78q.74-.04 1.85-.03h5.95V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarOffFill.displayName = 'CalendarOffFill';

// Triple export pattern
export { CalendarOffFill, CalendarOffFill as CalendarOffFillIcon, CalendarOffFill as SiCalendarOffFill };
export default CalendarOffFill;
export type { CalendarOffFillProps };
