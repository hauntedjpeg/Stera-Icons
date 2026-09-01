import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.13 9.88v3.24H17.2q-.82-.01-1.38.04-.6.03-1.13.28-.83.42-1.25 1.25-.25.54-.28 1.13-.05.56-.04 1.38v1.93H8.8c-.85 0-1.44 0-1.9-.04s-.69-.1-.86-.2q-.62-.32-.93-.93a2 2 0 0 1-.2-.86c-.03-.46-.04-1.05-.04-1.9V9.88z" opacity={0.4} />
        <path d="m18.87 14.88-.43.44-3.12 3.12c-.24.24-.36.36-.45.43V17.2c0-.57 0-.95.03-1.24.02-.28.06-.4.1-.47q.16-.32.49-.5c.07-.03.19-.07.47-.1l1.24-.02z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.5 1.13c.48 0 .88.39.88.87v1.13q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.87q.02.66-.08 1.17-.11.45-.35.83c-.19.31-.45.57-.77.89l-3.12 3.12c-.32.32-.58.58-.89.77q-.38.24-.83.35c-.35.08-.72.07-1.17.07H8.8q-1.24.01-2.04-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04V2a.87.87 0 1 1 1.75 0v1.13h5.24V2c0-.48.4-.87.88-.87M4.88 15.2c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h4.32V17.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04h1.93V9.89H4.88zm12.32-.32c-.57 0-.95 0-1.24.02-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47l-.02 1.24v1.67c.09-.07.21-.19.45-.43l3.12-3.12c.24-.24.36-.36.43-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldFillDuotone.displayName = 'CalendarFoldFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldFillDuotone, CalendarFoldFillDuotone as CalendarFoldFillDuotoneIcon, CalendarFoldFillDuotone as SiCalendarFoldFillDuotone };
export default CalendarFoldFillDuotone;
export type { CalendarFoldFillDuotoneProps };
