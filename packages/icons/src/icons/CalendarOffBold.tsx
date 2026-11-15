import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBold = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.3 2.8c.38-.4 1.02-.4 1.4 0l18 18c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-1.27-1.26q-.36.21-.75.35c-.66.22-1.45.21-2.52.21H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.93 3 15.7V8.74c0-1.07-.01-1.86.21-2.52q.13-.39.34-.75L2.3 4.2c-.39-.4-.39-1.03 0-1.42M5 10.5v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.96c1.06 0 1.48-.01 1.75-.07L8.6 10.5zm.07-3.52C5.01 7.23 5 7.61 5 8.5H6.6z" clipRule="evenodd" />
        <path d="M15.5 1.5c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v6.96c0 .55-.45 1-1 1s-1-.45-1-1V10.5h-5.76c-.55 0-1-.45-1-1s.45-1 1-1H19q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03v.99c0 .55-.45 1-1 1s-1-.45-1-1v-1H8.24c-.55 0-1-.45-1-1s.45-1 1-1h6.26v-1c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CalendarOffBold.displayName = 'CalendarOffBold';

// Triple export pattern
export { CalendarOffBold, CalendarOffBold as CalendarOffBoldIcon, CalendarOffBold as SiCalendarOffBold };
export default CalendarOffBold;
export type { CalendarOffBoldProps };
