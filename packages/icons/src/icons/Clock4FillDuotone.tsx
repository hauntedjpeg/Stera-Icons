import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock4FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5.02a1 1 0 0 0 .14.46l.01.02.09.1.03.04.03.02.03.03.08.06h.02l3.47 2a.88.88 0 0 0 .87-1.5l-3.03-1.76V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.5l3.02 1.74a.88.88 0 0 1-.87 1.52l-3.47-2-.02-.01-.08-.06-.03-.03-.03-.02-.03-.03-.09-.11-.01-.02a1 1 0 0 1-.13-.32l-.02-.14V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock4FillDuotone.displayName = 'Clock4FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock4FillDuotone, Clock4FillDuotone as Clock4FillDuotoneIcon, Clock4FillDuotone as SiClock4FillDuotone };
export default Clock4FillDuotone;
export type { Clock4FillDuotoneProps };
