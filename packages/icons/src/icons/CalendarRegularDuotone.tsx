import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.75 15.7q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-5.45h1.5v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-5.45h1.5z" opacity={.4} />
        <path d="M7.75 15.5c.69 0 1.25.56 1.25 1.25S8.44 18 7.75 18s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 15.5c.69 0 1.25.56 1.25 1.25S12.69 18 12 18s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16.25 15.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 17.19 15 16.5s.56-1.25 1.25-1.25M12 12c.69 0 1.25.56 1.25 1.25S12.69 14.5 12 14.5s-1.25-.56-1.25-1.25S11.31 12 12 12M16.25 12c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 13.94 15 13.25 15.56 12 16.25 12" />
        <path fillRule="evenodd" d="M15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.95H3.25V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2.5c0-.41.34-.75.75-.75M9.25 6.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.25q-.5 0-.86.04c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.04.53-.04 1.36h14.5q.01-.84-.04-1.36c-.04-.45-.1-.71-.2-.91q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21l-.86-.04V6.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.25h-5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarRegularDuotone.displayName = 'CalendarRegularDuotone';

// Triple export pattern
export { CalendarRegularDuotone, CalendarRegularDuotone as CalendarRegularDuotoneIcon, CalendarRegularDuotone as SiCalendarRegularDuotone };
export default CalendarRegularDuotone;
export type { CalendarRegularDuotoneProps };
