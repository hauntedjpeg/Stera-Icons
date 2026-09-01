import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05V9c0 .48-.4.88-.88.88H4.88v5.32c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h.7a.88.88 0 0 1 0 1.75h-.7q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2a.87.87 0 1 1 1.75 0v1.13h5.24V2c0-.48.4-.87.88-.87" opacity={.4} />
        <path fillRule="evenodd" d="M12.7 12.7a5.38 5.38 0 1 1 7.6 7.6 5.38 5.38 0 0 1-7.6-7.6m.7 1.93a3.63 3.63 0 0 0 4.97 4.98zm5.66-.7a3.6 3.6 0 0 0-4.43-.54l4.98 4.98c.84-1.4.66-3.23-.55-4.43" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarSlashFillDuotone.displayName = 'CalendarSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarSlashFillDuotone, CalendarSlashFillDuotone as CalendarSlashFillDuotoneIcon, CalendarSlashFillDuotone as SiCalendarSlashFillDuotone };
export default CalendarSlashFillDuotone;
export type { CalendarSlashFillDuotoneProps };
