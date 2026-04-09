import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBlankFillProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankFill = memo(
  forwardRef<SVGSVGElement, CalendarBlankFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-blank-fill" {...props}>
      <path fillRule="evenodd" d="M15.5 1.13c.48 0 .88.39.88.87v1.19a8 8 0 0 1 1.17.2q.34.1.66.27a5 5 0 0 1 2.22 2.31l.03.08.05.11a4 4 0 0 1 .2.7 7 7 0 0 1 .1.8v.04l.01.07.03.45v.1l.02.48V9l.01.88v3.73q.02 1.64-.06 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.87L3.13 9V8.8l.02-.47v-.1q0-.24.03-.46v-.1l.12-.81q0-.05.02-.09l.1-.4.04-.11.03-.1.17-.37a5 5 0 0 1 2.57-2.32q.63-.23 1.4-.28V2a.87.87 0 1 1 1.75 0v1.13h5.25V2c0-.48.39-.87.87-.87M4.88 9.88v3.72c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h3.2c1.13 0 1.93 0 2.56-.06a3 3 0 0 0 1.26-.29q.9-.46 1.36-1.36c.15-.28.24-.65.3-1.26.04-.63.05-1.43.05-2.56V9.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBlankFill.displayName = 'CalendarBlankFill';

// Triple export pattern (lucide-react style)
export { CalendarBlankFill, CalendarBlankFill as CalendarBlankFillIcon, CalendarBlankFill as SiCalendarBlankFill };
export default CalendarBlankFill;
export type { CalendarBlankFillProps };
