import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBlankRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankRegular = memo(
  forwardRef<SVGSVGElement, CalendarBlankRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1.25c.41 0 .75.34.75.75v1.13q.55 0 1 .04.82.04 1.5.38 1.13.57 1.7 1.7.34.68.38 1.5.06.81.05 2.05v6.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.45-.03 1-.04V2a.75.75 0 0 1 1.5 0v1.13h5.5V2c0-.41.34-.75.75-.75M4.88 9.75v5.45c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h6.4c.85 0 1.44 0 1.9-.04s.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86.03-.46.04-1.05.04-1.9V9.75zM9.25 6a.75.75 0 0 1-1.5 0V4.88q-.5 0-.85.03c-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86q-.04.51-.03 1.35h14.24q0-.84-.03-1.35c-.04-.45-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2q-.36-.03-.85-.03V6a.75.75 0 0 1-1.5 0V4.88h-5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBlankRegular.displayName = 'CalendarBlankRegular';

// Triple export pattern (lucide-react style)
export { CalendarBlankRegular, CalendarBlankRegular as CalendarBlankRegularIcon, CalendarBlankRegular as SiCalendarBlankRegular };
export default CalendarBlankRegular;
export type { CalendarBlankRegularProps };
