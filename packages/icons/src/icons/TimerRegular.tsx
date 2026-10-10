import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerRegularProps = Omit<IconBaseProps, 'children'>;

const TimerRegular = memo(
  forwardRef<SVGSVGElement, TimerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12c0-2.7 1.1-5.13 2.86-6.9.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07C4.67 7.66 3.75 9.72 3.75 12c0 4.56 3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25c0-4.3-3.3-7.84-7.5-8.21V6.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75" />
        <path d="M7.76 7.76c.16-.16.4-.2.6-.08l4.95 2.82.1.09c.79.78.79 2.04 0 2.82-.78.79-2.04.79-2.82 0l-.09-.1-2.82-4.95c-.11-.2-.08-.44.08-.6" />
    </IconBase>
  ))
);

TimerRegular.displayName = 'TimerRegular';

// Triple export pattern
export { TimerRegular, TimerRegular as TimerRegularIcon, TimerRegular as SiTimerRegular };
export default TimerRegular;
export type { TimerRegularProps };
