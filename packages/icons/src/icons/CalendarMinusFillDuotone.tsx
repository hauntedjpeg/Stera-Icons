import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.12 9.88v3.72c0 1.13 0 1.93-.05 2.56a3 3 0 0 1-.29 1.26q-.46.9-1.36 1.36a3 3 0 0 1-1.26.3c-.63.04-1.43.05-2.56.05h-3.2c-1.13 0-1.93 0-2.56-.06a3 3 0 0 1-1.26-.29 3 3 0 0 1-1.36-1.36 3 3 0 0 1-.3-1.26 35 35 0 0 1-.04-2.56V9.87zM9.5 13.62a.88.88 0 0 0 0 1.76h5a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 13.63a.88.88 0 0 1 0 1.74h-5a.88.88 0 0 1 0-1.74z" />
        <path fillRule="evenodd" d="M15.5 1.13c.48 0 .88.39.88.87v1.19a8 8 0 0 1 1.17.2q.34.1.66.27a5 5 0 0 1 2.22 2.31l.03.08.05.11a4 4 0 0 1 .2.7 7 7 0 0 1 .1.8v.04l.01.07.03.45v.1l.02.48V9l.01.88v3.73q.02 1.64-.06 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.87L3.13 9V8.8l.02-.47v-.1q0-.24.03-.46v-.1l.12-.81q0-.05.02-.09l.1-.4.04-.11.03-.1.17-.37a5 5 0 0 1 2.57-2.32q.63-.23 1.4-.28V2a.87.87 0 1 1 1.75 0v1.13h5.25V2c0-.48.39-.87.87-.87M4.88 10.4v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h3.2c1.13 0 1.93 0 2.56-.06a3 3 0 0 0 1.26-.29q.9-.46 1.36-1.36c.15-.28.24-.65.3-1.26.04-.63.05-1.43.05-2.56V9.87H4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarMinusFillDuotone.displayName = 'CalendarMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarMinusFillDuotone, CalendarMinusFillDuotone as CalendarMinusFillDuotoneIcon, CalendarMinusFillDuotone as SiCalendarMinusFillDuotone };
export default CalendarMinusFillDuotone;
export type { CalendarMinusFillDuotoneProps };
