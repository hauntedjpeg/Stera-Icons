import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.3 6.7c-.12.26-.2.6-.25 1.15V8h1.54l2 2H5v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.55-.05.89-.13 1.14-.24l1.46 1.46q-.22.15-.48.29c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6V8.88q.01-.66.06-1.19c.06-.73.18-1.37.48-1.96l.29-.49zM15.5 1c.55 0 1 .45 1 1v1.08q.97.07 1.77.46c.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.04.53.05 1.2L21 9v4.6q0 1.27-.03 2.18c-.02.55-.49.98-1.04.95-.55-.02-.98-.49-.95-1.04q.02-.8.02-2.09V10h-5.77c-.55 0-1-.45-1-1s.45-1 1-1h5.73l-.01-.15c-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.21-.1-.47-.19-.87-.24V6c0 .55-.45 1-1 1s-1-.45-1-1V5h-4.1c-.87 0-1.54 0-2.1.02-.55.03-1.01-.4-1.04-.95-.02-.55.4-1.02.96-1.04q.9-.04 2.18-.03h4.1V2c0-.55.45-1 1-1M5.88 4.46l.02.02-.04-.03z" opacity={0.4} />
        <path d="M2.3 2.3c.38-.4 1.02-.4 1.4 0l18 18c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-18-18c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

CalendarOffBoldDuotone.displayName = 'CalendarOffBoldDuotone';

// Triple export pattern
export { CalendarOffBoldDuotone, CalendarOffBoldDuotone as CalendarOffBoldDuotoneIcon, CalendarOffBoldDuotone as SiCalendarOffBoldDuotone };
export default CalendarOffBoldDuotone;
export type { CalendarOffBoldDuotoneProps };
