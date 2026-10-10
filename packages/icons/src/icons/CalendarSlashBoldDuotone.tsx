import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1c.55 0 1 .45 1 1v1l.75.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V9c0 .55-.45 1-1 1H5v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h.7c.55 0 1 .45 1 1s-.45 1-1 1h-.7q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4q.35-.02.75-.03V2c0-.55.45-1 1-1s1 .45 1 1v1h5V2c0-.55.45-1 1-1m-6 5c0 .55-.45 1-1 1s-1-.45-1-1v-.99q-.33 0-.59.03c-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82Q5 7.34 5 8h14q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18q-.27-.02-.59-.03V6c0 .55-.45 1-1 1s-1-.45-1-1V5h-5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12.61 12.61c2.15-2.15 5.63-2.15 7.78 0s2.15 5.63 0 7.78-5.63 2.15-7.78 0-2.15-5.63 0-7.78m.81 2.23c-.72 1.32-.52 3.01.6 4.14s2.82 1.32 4.14.6zm5.56-.82c-1.13-1.12-2.82-1.32-4.14-.6l4.74 4.74c.72-1.32.52-3.01-.6-4.14" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarSlashBoldDuotone.displayName = 'CalendarSlashBoldDuotone';

// Triple export pattern
export { CalendarSlashBoldDuotone, CalendarSlashBoldDuotone as CalendarSlashBoldDuotoneIcon, CalendarSlashBoldDuotone as SiCalendarSlashBoldDuotone };
export default CalendarSlashBoldDuotone;
export type { CalendarSlashBoldDuotoneProps };
