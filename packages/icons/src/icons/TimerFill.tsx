import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerFillProps = Omit<IconBaseProps, 'children'>;

const TimerFill = memo(
  forwardRef<SVGSVGElement, TimerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="timer-fill" {...props}>
      <path d="M12 1.75a10.25 10.25 0 1 1-7.25 3 1.25 1.25 0 0 1 1.77 1.77 7.75 7.75 0 1 0 6.73-2.17V6.5a1.25 1.25 0 1 1-2.5 0V3c0-.69.56-1.25 1.25-1.25" />
        <path d="M7.58 7.58c.24-.24.6-.29.9-.12l4.95 2.83q.09.04.16.12a2.25 2.25 0 0 1-3.18 3.18l-.12-.16-2.83-4.95a.75.75 0 0 1 .12-.9" />
    </IconBase>
  ))
);

TimerFill.displayName = 'TimerFill';

// Triple export pattern (lucide-react style)
export { TimerFill, TimerFill as TimerFillIcon, TimerFill as SiTimerFill };
export default TimerFill;
export type { TimerFillProps };
