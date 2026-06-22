import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TimerFillDuotone = memo(
  forwardRef<SVGSVGElement, TimerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75a10.25 10.25 0 1 1-7.25 3 1.25 1.25 0 0 1 1.77 1.77 7.75 7.75 0 1 0 6.73-2.17V6.5a1.25 1.25 0 1 1-2.5 0V3c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M13.59 13.6c-.88.87-2.3.87-3.18 0l-.12-.17-2.83-4.95a.75.75 0 0 1 1.02-1.02l4.95 2.83q.09.04.16.12c.88.88.88 2.3 0 3.18" />
    </IconBase>
  ))
);

TimerFillDuotone.displayName = 'TimerFillDuotone';

// Triple export pattern (lucide-react style)
export { TimerFillDuotone, TimerFillDuotone as TimerFillDuotoneIcon, TimerFillDuotone as SiTimerFillDuotone };
export default TimerFillDuotone;
export type { TimerFillDuotoneProps };
