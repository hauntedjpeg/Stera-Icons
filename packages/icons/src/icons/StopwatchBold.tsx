import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchBoldProps = Omit<IconBaseProps, 'children'>;

const StopwatchBold = memo(
  forwardRef<SVGSVGElement, StopwatchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 9.11c.4-.39 1.03-.39 1.42 0 .39.4.39 1.02 0 1.42l-2.17 2.16q.03.15.03.31c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75l.3.03z" />
        <path fillRule="evenodd" d="M12 4.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 4.5 12 4.5m0 2c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5" clipRule="evenodd" />
        <path d="M14 1.5c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

StopwatchBold.displayName = 'StopwatchBold';

// Triple export pattern
export { StopwatchBold, StopwatchBold as StopwatchBoldIcon, StopwatchBold as SiStopwatchBold };
export default StopwatchBold;
export type { StopwatchBoldProps };
