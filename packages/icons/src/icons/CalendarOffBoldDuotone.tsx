import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.07 6.98C5.01 7.23 5 7.61 5 8.5H6.6l2 2H5v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.96c1.06 0 1.48-.01 1.75-.07l1.52 1.51q-.36.21-.75.35c-.66.22-1.45.21-2.52.21H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.93 3 15.7V8.74c0-1.07-.01-1.86.21-2.52q.13-.39.34-.75zM15.5 1.5c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v6.96c0 .55-.45 1-1 1s-1-.45-1-1V10.5h-5.76c-.55 0-1-.45-1-1s.45-1 1-1H19q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03v.99c0 .55-.45 1-1 1s-1-.45-1-1v-1H8.24c-.55 0-1-.45-1-1s.45-1 1-1h6.26v-1c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M2.3 2.8c.38-.4 1.02-.4 1.4 0l18 18c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-18-18c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

CalendarOffBoldDuotone.displayName = 'CalendarOffBoldDuotone';

// Triple export pattern
export { CalendarOffBoldDuotone, CalendarOffBoldDuotone as CalendarOffBoldDuotoneIcon, CalendarOffBoldDuotone as SiCalendarOffBoldDuotone };
export default CalendarOffBoldDuotone;
export type { CalendarOffBoldDuotoneProps };
