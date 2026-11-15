import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarOffRegular = memo(
  forwardRef<SVGSVGElement, CalendarOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.47 2.97c.3-.3.77-.3 1.06 0l18 18c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.4-1.4q-.4.26-.87.42c-.61.21-1.35.2-2.44.2H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V8.74c0-1.1-.01-1.83.2-2.44q.16-.46.42-.87l-1.4-1.4c-.3-.3-.3-.77 0-1.06m2.28 7.28v5.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.96c1.21 0 1.64-.01 1.96-.12l.25-.1-9.28-9.28zm.22-3.72-.1.25c-.11.32-.12.75-.12 1.96v.01h2.44z" clipRule="evenodd" />
        <path d="M15.5 1.75c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.96c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.01h-6.01c-.42 0-.75-.34-.75-.75s.33-.75.75-.75h6q0-.84-.03-1.36c-.04-.45-.1-.71-.2-.91q-.35-.65-.99-.98c-.2-.1-.46-.17-.91-.21l-.86-.04V6.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.25h-6.5c-.42 0-.76-.34-.76-.75s.34-.75.75-.75h6.51V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarOffRegular.displayName = 'CalendarOffRegular';

// Triple export pattern
export { CalendarOffRegular, CalendarOffRegular as CalendarOffRegularIcon, CalendarOffRegular as SiCalendarOffRegular };
export default CalendarOffRegular;
export type { CalendarOffRegularProps };
