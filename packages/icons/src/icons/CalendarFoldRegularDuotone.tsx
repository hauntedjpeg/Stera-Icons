import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.75 13.67c0 .46 0 .8-.08 1.14q-.09.42-.33.8c-.18.3-.43.54-.75.86l-3.12 3.12c-.32.32-.57.57-.86.75q-.38.24-.8.33c-.33.08-.68.08-1.14.08H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.75h1.5v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.45V17.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h2.05v-3.5h1.5zm-3.55 1.08q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.9l.07-.03c.11-.07.22-.17.59-.54l3.12-3.12c.37-.37.47-.48.54-.59l.03-.07z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.5 1.25c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.95H3.25V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2a.75.75 0 0 1 1.5 0v1.25h5.5V2c0-.41.34-.75.75-.75M9.25 6a.75.75 0 1 1-1.5 0V4.75q-.5 0-.86.04c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.04.53-.04 1.36h14.5q.01-.84-.04-1.36a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21l-.86-.04V6a.75.75 0 0 1-1.5 0V4.75h-5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldRegularDuotone.displayName = 'CalendarFoldRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldRegularDuotone, CalendarFoldRegularDuotone as CalendarFoldRegularDuotoneIcon, CalendarFoldRegularDuotone as SiCalendarFoldRegularDuotone };
export default CalendarFoldRegularDuotone;
export type { CalendarFoldRegularDuotoneProps };
