import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 15.7q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.93 3 15.7v-5.2h2v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-5.2h2z" opacity={.4} />
        <path d="M7.75 15.5c.69 0 1.25.56 1.25 1.25S8.44 18 7.75 18s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 15.5c.69 0 1.25.56 1.25 1.25S12.69 18 12 18s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16.25 15.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 17.19 15 16.5s.56-1.25 1.25-1.25M12 12c.69 0 1.25.56 1.25 1.25S12.69 14.5 12 14.5s-1.25-.56-1.25-1.25S11.31 12 12 12M16.25 12c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 13.94 15 13.25 15.56 12 16.25 12" />
        <path fillRule="evenodd" d="M15.5 1.5c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v1.2H3V9.3q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2.5c0-.55.45-1 1-1s1 .45 1 1v1h5v-1c0-.55.45-1 1-1m-6 5c0 .55-.45 1-1 1s-1-.45-1-1v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82Q5 7.84 5 8.5h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03v.99c0 .55-.45 1-1 1s-1-.45-1-1v-1h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBoldDuotone.displayName = 'CalendarBoldDuotone';

// Triple export pattern
export { CalendarBoldDuotone, CalendarBoldDuotone as CalendarBoldDuotoneIcon, CalendarBoldDuotone as SiCalendarBoldDuotone };
export default CalendarBoldDuotone;
export type { CalendarBoldDuotoneProps };
