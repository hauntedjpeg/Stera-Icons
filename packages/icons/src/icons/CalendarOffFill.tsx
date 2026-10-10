import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffFillProps = Omit<IconBaseProps, 'children'>;

const CalendarOffFill = memo(
  forwardRef<SVGSVGElement, CalendarOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.38 2.38c.34-.34.9-.34 1.24 0l18 18c.34.34.34.9 0 1.24s-.9.34-1.24 0L18.77 20q-.27.18-.56.33c-.57.3-1.2.42-1.91.48s-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-3.2L3.13 9v-.2l.02-.47v-.1q0-.24.03-.46v-.1l.02-.12q.03-.36.1-.7V6.8l.12-.42.04-.11.03-.1.04-.1.04-.09.09-.18q.14-.3.33-.56l-1.6-1.61c-.35-.34-.35-.9 0-1.24m2.5 7.5v3.72c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h3.2c1.13 0 1.93 0 2.56-.06.6-.05.97-.14 1.26-.29l.08-.04-8.86-8.86z" clipRule="evenodd" />
        <path d="M15.5 1.13c.48 0 .87.39.87.87v1.19c.7.06 1.3.19 1.84.47.92.46 1.67 1.21 2.13 2.13l.09.18.03.08.05.11.03.1.04.1q.06.21.1.43l.02.07q.07.33.1.7l.01.1v.04l.01.07.03.45v.1l.01.48V9l.01 1.4v3.2q.01 1.64-.05 2.7l-.06.54-1.65-1.64.01-1.6V9.87H13.8L7.16 3.26l.54-.07q1.06-.07 2.7-.06h4.22V2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

CalendarOffFill.displayName = 'CalendarOffFill';

// Triple export pattern
export { CalendarOffFill, CalendarOffFill as CalendarOffFillIcon, CalendarOffFill as SiCalendarOffFill };
export default CalendarOffFill;
export type { CalendarOffFillProps };
