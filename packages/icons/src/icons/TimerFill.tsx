import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerFillProps = Omit<IconBaseProps, 'children'>;

const TimerFill = memo(
  forwardRef<SVGSVGElement, TimerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12c0-2.83 1.15-5.4 3-7.25.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77C5.12 7.92 4.25 9.86 4.25 12c0 4.28 3.47 7.75 7.75 7.75s7.75-3.47 7.75-7.75c0-3.85-2.81-7.05-6.5-7.65V6.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V3c0-.69.56-1.25 1.25-1.25" />
        <path d="M7.58 7.58c.24-.24.6-.29.9-.12l4.95 2.83q.09.04.16.12c.88.88.88 2.3 0 3.18s-2.3.88-3.18 0q-.08-.07-.12-.16L7.46 8.48c-.17-.29-.12-.66.12-.9" />
    </IconBase>
  ))
);

TimerFill.displayName = 'TimerFill';

// Triple export pattern
export { TimerFill, TimerFill as TimerFillIcon, TimerFill as SiTimerFill };
export default TimerFill;
export type { TimerFillProps };
