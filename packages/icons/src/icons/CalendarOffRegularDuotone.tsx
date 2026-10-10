import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5.23 6.3-.13.22c-.15.3-.25.7-.3 1.31l-.02.42h2.4l1.5 1.5H4.76v3.85c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3l.24-.13 1.08 1.08q-.3.21-.63.38c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V8.9q.01-.66.06-1.19.06-1.05.46-1.87.17-.33.38-.63zM15.5 1.25c.41 0 .75.34.75.75v1.3h.04q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.05.53.05 1.2l.01.09v4.6q0 1.27-.03 2.17c-.01.41-.36.73-.78.71-.41-.01-.73-.36-.71-.78.02-.56.02-1.23.02-2.1V9.75h-6.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6l-.03-.42c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.14-.66-.24-1.23-.29V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75H10.4q-1.29 0-2.1.02c-.42.02-.77-.3-.79-.71-.02-.42.3-.77.72-.78q.89-.04 2.17-.03h4.35V2c0-.41.34-.75.75-.75M5.7 4.64l.02.02-.04-.04z" opacity={0.4} />
        <path d="M2.47 2.47c.3-.3.77-.3 1.06 0l18 18c.3.3.3.77 0 1.06s-.77.3-1.06 0l-18-18c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CalendarOffRegularDuotone.displayName = 'CalendarOffRegularDuotone';

// Triple export pattern
export { CalendarOffRegularDuotone, CalendarOffRegularDuotone as CalendarOffRegularDuotoneIcon, CalendarOffRegularDuotone as SiCalendarOffRegularDuotone };
export default CalendarOffRegularDuotone;
export type { CalendarOffRegularDuotoneProps };
