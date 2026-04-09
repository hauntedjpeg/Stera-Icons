import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchFillProps = Omit<IconBaseProps, 'children'>;

const StopwatchFill = memo(
  forwardRef<SVGSVGElement, StopwatchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-fill" {...props}>
      <path fillRule="evenodd" d="M12 4.63a8.37 8.37 0 1 1 0 16.74 8.37 8.37 0 0 1 0-16.74m3.8 4.57a.9.9 0 0 0-1.24 0l-2.21 2.21a1.63 1.63 0 1 0 1.24 1.24l2.21-2.21a.9.9 0 0 0 0-1.24" clipRule="evenodd" />
        <path d="M14 1.63a.88.88 0 0 1 0 1.75h-4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

StopwatchFill.displayName = 'StopwatchFill';

// Triple export pattern (lucide-react style)
export { StopwatchFill, StopwatchFill as StopwatchFillIcon, StopwatchFill as SiStopwatchFill };
export default StopwatchFill;
export type { StopwatchFillProps };
