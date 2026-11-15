import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarXBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 15.7q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.93 3 15.7v-5.2h2v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-5.2h2z" opacity={.4} />
        <path d="M13.3 12.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L13.42 15l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L12 16.42l-1.3 1.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L10.58 15l-1.3-1.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0L12 13.58z" />
        <path fillRule="evenodd" d="M15.5 1.5c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v1.2H3V9.3q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2.5c0-.55.45-1 1-1s1 .45 1 1v1h5v-1c0-.55.45-1 1-1m-6 5c0 .55-.45 1-1 1s-1-.45-1-1v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82Q5 7.84 5 8.5h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03v.99c0 .55-.45 1-1 1s-1-.45-1-1v-1h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarXBoldDuotone.displayName = 'CalendarXBoldDuotone';

// Triple export pattern
export { CalendarXBoldDuotone, CalendarXBoldDuotone as CalendarXBoldDuotoneIcon, CalendarXBoldDuotone as SiCalendarXBoldDuotone };
export default CalendarXBoldDuotone;
export type { CalendarXBoldDuotoneProps };
