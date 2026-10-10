import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TimerFillDuotone = memo(
  forwardRef<SVGSVGElement, TimerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12c0-2.83 1.15-5.4 3-7.25.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77C5.12 7.92 4.25 9.86 4.25 12c0 4.28 3.47 7.75 7.75 7.75s7.75-3.47 7.75-7.75c0-3.85-2.81-7.05-6.5-7.65V6.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V3c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M13.59 13.6c-.88.87-2.3.87-3.18 0q-.07-.08-.12-.17L7.46 8.48c-.17-.3-.12-.66.12-.9s.6-.29.9-.12l4.95 2.83q.09.04.16.12c.88.88.88 2.3 0 3.18" />
    </IconBase>
  ))
);

TimerFillDuotone.displayName = 'TimerFillDuotone';

// Triple export pattern
export { TimerFillDuotone, TimerFillDuotone as TimerFillDuotoneIcon, TimerFillDuotone as SiTimerFillDuotone };
export default TimerFillDuotone;
export type { TimerFillDuotoneProps };
