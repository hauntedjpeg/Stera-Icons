import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13a8.37 8.37 0 0 1 5.65 14.55l-.1.08A8.4 8.4 0 0 1 12 20.87a8.3 8.3 0 0 1-5.24-1.84l-.32-.27A8.38 8.38 0 0 1 12 4.12m-3 7.5a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M6.44 18.76a8 8 0 0 0 1.42 1.02l-1.13 1.7a.88.88 0 0 1-1.46-.97zM18.73 20.51a.88.88 0 0 1-1.46.98l-1.13-1.7a8 8 0 0 0 1.42-1.03zM15 11.62a.88.88 0 0 1 0 1.75H9a.88.88 0 0 1 0-1.75zM5.56 1.35a2.4 2.4 0 0 1 3.25.87c.24.42.1.95-.32 1.2l-2.6 1.5a.9.9 0 0 1-1.2-.33 2.4 2.4 0 0 1 .87-3.24M15.2 2.22a2.38 2.38 0 1 1 4.1 2.37.9.9 0 0 1-1.19.32l-2.6-1.5a.9.9 0 0 1-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockMinusFillDuotone.displayName = 'AlarmClockMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusFillDuotone, AlarmClockMinusFillDuotone as AlarmClockMinusFillDuotoneIcon, AlarmClockMinusFillDuotone as SiAlarmClockMinusFillDuotone };
export default AlarmClockMinusFillDuotone;
export type { AlarmClockMinusFillDuotoneProps };
