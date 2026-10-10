import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBold = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.3 2.3c.38-.4 1.02-.4 1.4 0l2.16 2.15.02.01.02.02L21.7 20.3c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1.55-1.54q-.23.15-.48.29c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.18-2.19-.3-.6-.43-1.23-.5-1.96Q3 15.25 3 13.6V8.88q.02-.66.06-1.19c.06-.73.18-1.37.49-1.96q.13-.25.28-.49L2.29 3.71c-.39-.4-.39-1.03 0-1.42M5 10v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21q.44.87 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.55-.05.89-.13 1.14-.24L8.6 10zm.3-3.3c-.12.26-.2.6-.25 1.15V8h1.54z" clipRule="evenodd" />
        <path d="M15.5 1c.55 0 1 .45 1 1v1.08q.97.07 1.77.46c.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.05.53.05 1.2L21 9v4.6q0 1.27-.03 2.18c-.02.55-.49.98-1.04.95-.55-.02-.98-.49-.95-1.04q.02-.8.02-2.09V10h-5.77c-.55 0-1-.45-1-1s.45-1 1-1h5.73l-.01-.15c-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.21-.1-.47-.19-.87-.24V6c0 .55-.45 1-1 1s-1-.45-1-1V5h-4.1c-.87 0-1.54 0-2.1.02-.55.03-1.01-.4-1.04-.95-.02-.55.4-1.02.96-1.04q.9-.04 2.18-.03h4.1V2c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CalendarOffBold.displayName = 'CalendarOffBold';

// Triple export pattern
export { CalendarOffBold, CalendarOffBold as CalendarOffBoldIcon, CalendarOffBold as SiCalendarOffBold };
export default CalendarOffBold;
export type { CalendarOffBoldProps };
