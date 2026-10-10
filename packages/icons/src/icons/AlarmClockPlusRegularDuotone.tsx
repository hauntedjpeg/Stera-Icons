import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.25c4.56 0 8.25 3.7 8.25 8.25 0 2.75-1.35 5.2-3.42 6.69-1.36.98-3.03 1.56-4.83 1.56s-3.47-.58-4.83-1.56c-2.07-1.5-3.42-3.94-3.42-6.69 0-4.56 3.7-8.25 8.25-8.25m0 1.5c-3.73 0-6.75 3.02-6.75 6.75 0 2.25 1.1 4.25 2.8 5.47 1.11.8 2.47 1.28 3.95 1.28s2.84-.47 3.95-1.28c1.7-1.22 2.8-3.22 2.8-5.47 0-3.73-3.02-6.75-6.75-6.75" clipRule="evenodd" opacity={.4} />
        <path d="m6.6 18.74.57.45q.32.23.65.42l-1.2 1.8c-.23.35-.7.44-1.04.21s-.43-.7-.2-1.04zM18.62 20.58c.23.35.14.81-.2 1.04s-.81.14-1.04-.2l-1.2-1.8.65-.43q.3-.22.56-.45zM12 8.75c.41 0 .75.34.75.75v2.25H15c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V9.5c0-.41.34-.75.75-.75M5.63 1.46C6.7.84 8.08 1.2 8.7 2.28c.2.36.08.82-.28 1.03l-2.6 1.5c-.35.2-.81.08-1.02-.28-.62-1.07-.25-2.45.83-3.07M15.3 2.28c.62-1.07 2-1.44 3.07-.82 1.08.62 1.45 2 .83 3.07-.2.36-.67.48-1.03.28l-2.6-1.5c-.35-.21-.48-.67-.27-1.03" />
    </IconBase>
  ))
);

AlarmClockPlusRegularDuotone.displayName = 'AlarmClockPlusRegularDuotone';

// Triple export pattern
export { AlarmClockPlusRegularDuotone, AlarmClockPlusRegularDuotone as AlarmClockPlusRegularDuotoneIcon, AlarmClockPlusRegularDuotone as SiAlarmClockPlusRegularDuotone };
export default AlarmClockPlusRegularDuotone;
export type { AlarmClockPlusRegularDuotoneProps };
