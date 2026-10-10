import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldRegular = memo(
  forwardRef<SVGSVGElement, CalendarFoldRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1.25c.41 0 .75.34.75.75v1.25q.56 0 .98.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v4.87c0 .46 0 .8-.08 1.14q-.09.42-.33.8c-.18.3-.43.54-.75.86l-3.12 3.12c-.32.32-.57.57-.86.75q-.38.24-.8.33c-.33.08-.68.08-1.14.08H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37l.98-.04V2c0-.41.34-.75.75-.75s.75.34.75.75v1.25h5.5V2c0-.41.34-.75.75-.75M4.75 15.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.45V17.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h2.05v-3.5H4.75zm12.45-.45q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.9l.07-.03c.11-.07.22-.17.59-.54l3.12-3.12c.37-.37.47-.48.54-.59l.03-.07zM9.25 6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75q-.5 0-.86.04c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.03.28-.03.65v.71h14.49l-.01-.71q0-.37-.03-.65c-.04-.45-.1-.71-.2-.91q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21l-.86-.04V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75h-5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldRegular.displayName = 'CalendarFoldRegular';

// Triple export pattern
export { CalendarFoldRegular, CalendarFoldRegular as CalendarFoldRegularIcon, CalendarFoldRegular as SiCalendarFoldRegular };
export default CalendarFoldRegular;
export type { CalendarFoldRegularProps };
