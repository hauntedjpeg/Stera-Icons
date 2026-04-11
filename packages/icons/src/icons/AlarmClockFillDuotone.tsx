import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13a8.37 8.37 0 1 1 0 16.74 8.37 8.37 0 0 1 0-16.74m0 3.5c-.48 0-.87.39-.87.87v3.13H8.5a.88.88 0 0 0 0 1.74H12c.48 0 .88-.39.88-.87v-4c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M6.44 18.76a8 8 0 0 0 1.42 1.02l-1.13 1.7a.88.88 0 0 1-1.46-.97zM18.73 20.51a.88.88 0 0 1-1.46.98l-1.13-1.7a8 8 0 0 0 1.42-1.03zM12 7.62c.48 0 .87.4.87.88v4c0 .48-.39.87-.87.87H8.5a.88.88 0 0 1 0-1.75h2.62V8.5c0-.48.4-.88.88-.88M5.56 1.35a2.4 2.4 0 0 1 3.25.87c.24.42.1.95-.32 1.2l-2.6 1.5a.9.9 0 0 1-1.2-.33 2.4 2.4 0 0 1 .87-3.24M15.2 2.22a2.38 2.38 0 1 1 4.1 2.37.9.9 0 0 1-1.19.32l-2.6-1.5a.9.9 0 0 1-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockFillDuotone.displayName = 'AlarmClockFillDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockFillDuotone, AlarmClockFillDuotone as AlarmClockFillDuotoneIcon, AlarmClockFillDuotone as SiAlarmClockFillDuotone };
export default AlarmClockFillDuotone;
export type { AlarmClockFillDuotoneProps };
