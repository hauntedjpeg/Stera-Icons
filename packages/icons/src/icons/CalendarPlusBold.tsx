import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarPlusBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarPlusBold = memo(
  forwardRef<SVGSVGElement, CalendarPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V17a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V12a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1l.75.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1M5 15.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10H5zM9.5 6a1 1 0 1 1-2 0v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18L16.5 5V6a1 1 0 1 1-2 0V5h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarPlusBold.displayName = 'CalendarPlusBold';

// Triple export pattern (lucide-react style)
export { CalendarPlusBold, CalendarPlusBold as CalendarPlusBoldIcon, CalendarPlusBold as SiCalendarPlusBold };
export default CalendarPlusBold;
export type { CalendarPlusBoldProps };
