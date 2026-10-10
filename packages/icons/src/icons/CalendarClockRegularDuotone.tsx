import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1.25c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V9c0 .41-.34.75-.75.75H4.75v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h.7c.41 0 .75.34.75.75s-.34.75-.75.75h-.7q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2c0-.41.34-.75.75-.75M9.25 6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75q-.5 0-.86.04c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.04.53-.04 1.36h14.5q.01-.84-.04-1.36c-.04-.45-.1-.71-.2-.91q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21l-.86-.04V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75h-5.5z" clipRule="evenodd" opacity={.4} />
        <path d="M16.5 14c.41 0 .75.34.75.75v1.35l1.17.78c.34.23.43.7.2 1.04s-.7.43-1.04.2l-1.5-1q-.31-.23-.33-.62v-1.75c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M16.5 11.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25 2.35-5.25 5.25-5.25m0 1.5c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarClockRegularDuotone.displayName = 'CalendarClockRegularDuotone';

// Triple export pattern
export { CalendarClockRegularDuotone, CalendarClockRegularDuotone as CalendarClockRegularDuotoneIcon, CalendarClockRegularDuotone as SiCalendarClockRegularDuotone };
export default CalendarClockRegularDuotone;
export type { CalendarClockRegularDuotoneProps };
