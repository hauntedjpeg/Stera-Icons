import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4.13a8.37 8.37 0 1 1 0 16.74 8.37 8.37 0 0 1 0-16.74m0 4.5c-.48 0-.87.39-.87.87v2.13H9a.88.88 0 0 0 0 1.74h2.13v2.13a.88.88 0 0 0 1.74 0v-2.12H15a.88.88 0 0 0 0-1.76h-2.12V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M6.44 18.76a8 8 0 0 0 1.42 1.02l-1.13 1.7a.88.88 0 0 1-1.46-.97zM18.73 20.51a.88.88 0 0 1-1.46.98l-1.13-1.7a8 8 0 0 0 1.42-1.03zM12 8.62c.48 0 .87.4.87.88v2.12H15a.88.88 0 0 1 0 1.75h-2.13v2.13a.88.88 0 0 1-1.75 0v-2.13H9a.88.88 0 0 1 0-1.75h2.12V9.5c0-.48.4-.88.88-.88M5.56 1.35a2.4 2.4 0 0 1 3.25.87c.24.42.1.95-.32 1.2l-2.6 1.5a.9.9 0 0 1-1.2-.33 2.4 2.4 0 0 1 .87-3.24M15.2 2.22a2.38 2.38 0 1 1 4.1 2.37.9.9 0 0 1-1.19.32l-2.6-1.5a.9.9 0 0 1-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockPlusFillDuotone.displayName = 'AlarmClockPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusFillDuotone, AlarmClockPlusFillDuotone as AlarmClockPlusFillDuotoneIcon, AlarmClockPlusFillDuotone as SiAlarmClockPlusFillDuotone };
export default AlarmClockPlusFillDuotone;
export type { AlarmClockPlusFillDuotoneProps };
