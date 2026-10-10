import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerBoldProps = Omit<IconBaseProps, 'children'>;

const TimerBold = memo(
  forwardRef<SVGSVGElement, TimerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41C4.9 7.8 4 9.8 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.08-3.05-7.44-7-7.94V6.5c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1" />
        <path d="M7.58 7.58c.24-.24.6-.29.9-.12l4.95 2.83q.09.04.16.12c.88.88.88 2.3 0 3.18s-2.3.88-3.18 0q-.08-.07-.12-.16L7.46 8.48c-.17-.29-.12-.66.12-.9" />
    </IconBase>
  ))
);

TimerBold.displayName = 'TimerBold';

// Triple export pattern
export { TimerBold, TimerBold as TimerBoldIcon, TimerBold as SiTimerBold };
export default TimerBold;
export type { TimerBoldProps };
