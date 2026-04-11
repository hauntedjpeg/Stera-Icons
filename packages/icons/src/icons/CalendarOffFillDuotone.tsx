import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m8.64 9.88 8.86 8.86-.08.04c-.28.15-.65.24-1.26.3-.63.04-1.43.05-2.56.05h-3.2c-1.13 0-1.93 0-2.56-.06a3 3 0 0 1-1.26-.29 3 3 0 0 1-1.36-1.36 3 3 0 0 1-.3-1.26 35 35 0 0 1-.04-2.56V9.87zM13.79 9.88h5.33v5.32z" opacity={0.4} />
        <path fillRule="evenodd" d="M2.38 2.38a.9.9 0 0 1 1.24 0l18 18a.88.88 0 0 1-1.24 1.24L18.77 20q-.27.18-.56.33a5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2L3.13 9v-.2l.02-.47v-.1q0-.24.03-.46v-.1a10 10 0 0 1 .13-.88l.11-.42.04-.11.03-.1a4 4 0 0 1 .5-.93l-1.6-1.61a.9.9 0 0 1 0-1.24m2.5 7.5v3.72c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h3.2c1.13 0 1.93 0 2.56-.06.6-.05.97-.14 1.26-.29l.08-.04-8.86-8.86z" clipRule="evenodd" />
        <path d="M15.5 1a1 1 0 0 1 1 1v1.2q.95.09 1.71.46a5 5 0 0 1 2.22 2.31l.03.08.05.11a4 4 0 0 1 .2.7 7 7 0 0 1 .1.8v.04l.01.07.03.45v.1l.01.48V9l.01 1.4v3.2q.01 1.64-.05 2.7l-.06.54-1.65-1.64.01-1.6V9.87H13.8L7.16 3.26l.54-.07q1.06-.07 2.7-.06h4.1V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarOffFillDuotone.displayName = 'CalendarOffFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarOffFillDuotone, CalendarOffFillDuotone as CalendarOffFillDuotoneIcon, CalendarOffFillDuotone as SiCalendarOffFillDuotone };
export default CalendarOffFillDuotone;
export type { CalendarOffFillDuotoneProps };
