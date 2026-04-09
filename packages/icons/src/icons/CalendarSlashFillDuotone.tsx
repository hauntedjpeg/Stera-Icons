import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-slash-fill-duotone" {...props}>
      <path d="M15.5 1.13c.48 0 .88.39.88.87v1.15a4 4 0 0 1 1.68.43l.15.08.1.04.01.01.27.16.06.04q.12.07.24.17l.14.1.15.13q.28.24.52.51l.04.06.35.47.04.07.19.31.02.06.08.16q.24.52.36 1.1c.1.5.1 1.06.1 1.95h-.01a.87.87 0 0 1-.87.88H4.88v4.62c0 1.46 0 2 .13 2.4.3 1 1.08 1.79 2.08 2.09.42.13.95.14 2.41.14a.88.88 0 0 1 0 1.75c-1.33 0-2.2 0-2.91-.21a4.9 4.9 0 0 1-3.25-3.26c-.22-.72-.21-1.58-.21-2.91V8.8l.02-.47v-.1q0-.24.03-.46v-.1l.12-.81q0-.05.02-.09l.1-.43.04-.08.03-.1.17-.37a5 5 0 0 1 2.57-2.32q.63-.23 1.4-.28V2a.88.88 0 0 1 1.75 0v1.13h5.25V2c0-.48.39-.87.87-.87" opacity={.4} />
        <path fillRule="evenodd" d="M12.7 12.7a5.38 5.38 0 1 1 7.6 7.6 5.38 5.38 0 0 1-7.6-7.6m.7 1.93a3.63 3.63 0 0 0 4.97 4.98zm5.66-.7a3.6 3.6 0 0 0-4.43-.54l4.98 4.98c.84-1.4.66-3.23-.55-4.43" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarSlashFillDuotone.displayName = 'CalendarSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarSlashFillDuotone, CalendarSlashFillDuotone as CalendarSlashFillDuotoneIcon, CalendarSlashFillDuotone as SiCalendarSlashFillDuotone };
export default CalendarSlashFillDuotone;
export type { CalendarSlashFillDuotoneProps };
