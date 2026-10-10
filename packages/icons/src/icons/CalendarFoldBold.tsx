import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldBold = memo(
  forwardRef<SVGSVGElement, CalendarFoldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v4.87q.02.66-.08 1.2-.12.46-.36.87c-.2.33-.48.6-.79.9l-3.13 3.13c-.3.31-.57.59-.9.79q-.4.24-.87.36c-.37.09-.75.08-1.2.08H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2c0-.55.45-1 1-1s1 .45 1 1v1h5V2c0-.55.45-1 1-1M5 15.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13v-1.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16q.44-.87 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19v-3H5zm12.2-.2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.38l.23-.22 3.13-3.13.22-.23zM9.5 6c0 .55-.45 1-1 1s-1-.45-1-1v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03V6c0 .55-.45 1-1 1s-1-.45-1-1V5h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldBold.displayName = 'CalendarFoldBold';

// Triple export pattern
export { CalendarFoldBold, CalendarFoldBold as CalendarFoldBoldIcon, CalendarFoldBold as SiCalendarFoldBold };
export default CalendarFoldBold;
export type { CalendarFoldBoldProps };
