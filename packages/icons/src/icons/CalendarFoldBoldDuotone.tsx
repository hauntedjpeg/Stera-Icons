import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 13.67q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-3.13 3.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V10h2v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13v-1.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19v-3h2zM17.2 15c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.38l.23-.22 3.13-3.13.22-.23z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1l.75.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V10H3V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1m-6 5a1 1 0 1 1-2 0v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18L16.5 5V6a1 1 0 1 1-2 0V5h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldBoldDuotone.displayName = 'CalendarFoldBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldBoldDuotone, CalendarFoldBoldDuotone as CalendarFoldBoldDuotoneIcon, CalendarFoldBoldDuotone as SiCalendarFoldBoldDuotone };
export default CalendarFoldBoldDuotone;
export type { CalendarFoldBoldDuotoneProps };
