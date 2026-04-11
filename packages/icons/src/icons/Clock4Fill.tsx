import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillProps = Omit<IconBaseProps, 'children'>;

const Clock4Fill = memo(
  forwardRef<SVGSVGElement, Clock4FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5.02a1 1 0 0 0 .14.46l.01.02.09.1.03.04.03.02.03.03.08.06h.02l3.47 2a.88.88 0 0 0 .87-1.5l-3.03-1.76V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Fill.displayName = 'Clock4Fill';

// Triple export pattern (lucide-react style)
export { Clock4Fill, Clock4Fill as Clock4FillIcon, Clock4Fill as SiClock4Fill };
export default Clock4Fill;
export type { Clock4FillProps };
