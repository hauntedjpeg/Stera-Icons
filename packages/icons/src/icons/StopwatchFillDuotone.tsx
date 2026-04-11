import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchFillDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.63a8.37 8.37 0 1 1 0 16.74 8.37 8.37 0 0 1 0-16.74m3.8 4.57a.9.9 0 0 0-1.24 0l-2.21 2.21a1.63 1.63 0 1 0 1.24 1.24l2.21-2.21a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M14.56 9.2a.88.88 0 0 1 1.24 1.24l-2.21 2.21q.03.17.04.35a1.62 1.62 0 1 1-1.28-1.59zM14 1.63a.88.88 0 0 1 0 1.75h-4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

StopwatchFillDuotone.displayName = 'StopwatchFillDuotone';

// Triple export pattern (lucide-react style)
export { StopwatchFillDuotone, StopwatchFillDuotone as StopwatchFillDuotoneIcon, StopwatchFillDuotone as SiStopwatchFillDuotone };
export default StopwatchFillDuotone;
export type { StopwatchFillDuotoneProps };
