import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBlankBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankBold = memo(
  forwardRef<SVGSVGElement, CalendarBlankBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1l.75.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V10h-.12v5.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V10H3V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1M4.88 10v5.2c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h6.4c.85 0 1.44 0 1.9-.04s.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86.03-.46.04-1.05.04-1.9V10zM9.5 6a1 1 0 1 1-2 0v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18L16.5 5V6a1 1 0 1 1-2 0V5h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBlankBold.displayName = 'CalendarBlankBold';

// Triple export pattern (lucide-react style)
export { CalendarBlankBold, CalendarBlankBold as CalendarBlankBoldIcon, CalendarBlankBold as SiCalendarBlankBold };
export default CalendarBlankBold;
export type { CalendarBlankBoldProps };
