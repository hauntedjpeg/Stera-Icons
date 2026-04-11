import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldFillProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFill = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1.13c.48 0 .88.39.88.87v1.19q.62.05 1.17.2.34.1.66.27a5 5 0 0 1 2.22 2.31l.03.08.05.11a4 4 0 0 1 .2.7 7 7 0 0 1 .1.8v.04l.01.07.03.45v.1l.02.48V9l.01.88v3.8q.02.66-.08 1.17-.11.45-.35.83c-.19.31-.45.57-.77.89l-3.12 3.12c-.32.32-.58.58-.89.77q-.38.24-.83.35c-.35.08-.72.07-1.17.07H10.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.87L3.13 9V8.8l.02-.47v-.1q0-.24.03-.46v-.1l.12-.81q0-.05.02-.09l.1-.4.04-.11.03-.1.17-.37a5 5 0 0 1 2.57-2.32q.63-.23 1.4-.28V2a.87.87 0 1 1 1.75 0v1.13h5.25V2c0-.48.39-.87.87-.87M4.88 10.4v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h2.72V17.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04h1.93V9.88H4.87zm12.32 4.47c-.57 0-.95 0-1.24.03-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47l-.02 1.24v1.67c.09-.07.21-.19.45-.43l3.12-3.12c.24-.24.36-.36.43-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldFill.displayName = 'CalendarFoldFill';

// Triple export pattern (lucide-react style)
export { CalendarFoldFill, CalendarFoldFill as CalendarFoldFillIcon, CalendarFoldFill as SiCalendarFoldFill };
export default CalendarFoldFill;
export type { CalendarFoldFillProps };
