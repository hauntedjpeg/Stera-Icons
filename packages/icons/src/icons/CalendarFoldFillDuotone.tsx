import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.25 10.25v3.5H17.2q-.82 0-1.37.03-.57.03-1.08.27-.8.4-1.2 1.2-.24.51-.27 1.08-.04.55-.03 1.37v2.05H8.8c-.85 0-1.45 0-1.9-.04-.46-.04-.72-.1-.92-.2q-.65-.34-.98-.99c-.1-.2-.17-.46-.21-.91-.04-.46-.04-1.06-.04-1.91v-5.45z" opacity={0.4} />
        <path d="m19.1 15.25-.03.07c-.07.11-.17.22-.54.59l-3.12 3.12c-.37.37-.48.47-.59.54l-.07.03v-1.9q0-.84.02-1.25c.03-.29.07-.43.12-.52q.18-.35.54-.54c.1-.05.23-.1.52-.12s.68-.02 1.25-.02z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.5 1.75c.41 0 .75.34.75.75v1.25h.03l.44.01h.05l.46.03c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v4.87c0 .46 0 .8-.08 1.14q-.09.42-.33.8c-.18.3-.43.54-.75.86l-3.12 3.12c-.32.32-.57.57-.86.75q-.38.24-.8.33c-.33.08-.68.08-1.14.08H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.46-.02h.05l.44-.02h.03V2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2.5c0-.41.34-.75.75-.75M4.75 15.7c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.45V17.7q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h2.05v-3.5H4.75zm12.45-.45q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.9l.07-.03c.11-.07.22-.17.59-.54l3.12-3.12c.37-.37.47-.48.54-.59l.03-.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldFillDuotone.displayName = 'CalendarFoldFillDuotone';

// Triple export pattern
export { CalendarFoldFillDuotone, CalendarFoldFillDuotone as CalendarFoldFillDuotoneIcon, CalendarFoldFillDuotone as SiCalendarFoldFillDuotone };
export default CalendarFoldFillDuotone;
export type { CalendarFoldFillDuotoneProps };
