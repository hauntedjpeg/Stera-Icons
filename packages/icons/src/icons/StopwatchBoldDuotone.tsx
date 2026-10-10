import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchBoldDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 4.5 12 4.5m0 2c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5" clipRule="evenodd" opacity={.4} />
        <path d="M14 1.5c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM14.47 9.11c.4-.39 1.03-.39 1.42 0 .39.4.39 1.03 0 1.42l-2.17 2.16q.03.15.03.31c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75l.3.03z" />
    </IconBase>
  ))
);

StopwatchBoldDuotone.displayName = 'StopwatchBoldDuotone';

// Triple export pattern
export { StopwatchBoldDuotone, StopwatchBoldDuotone as StopwatchBoldDuotoneIcon, StopwatchBoldDuotone as SiStopwatchBoldDuotone };
export default StopwatchBoldDuotone;
export type { StopwatchBoldDuotoneProps };
