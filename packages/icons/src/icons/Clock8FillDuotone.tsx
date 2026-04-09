import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock8FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-8-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v4.5L8.1 13.23a.88.88 0 0 0 .87 1.52l3.44-1.99q.16-.09.28-.24l.01-.01.04-.06.01-.01a1 1 0 0 0 .13-.45V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .87.39.87.87v5q0 .25-.12.45l-.01.01-.04.06v.01a1 1 0 0 1-.29.24l-3.44 1.99a.88.88 0 0 1-.87-1.52l3.02-1.75V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock8FillDuotone.displayName = 'Clock8FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock8FillDuotone, Clock8FillDuotone as Clock8FillDuotoneIcon, Clock8FillDuotone as SiClock8FillDuotone };
export default Clock8FillDuotone;
export type { Clock8FillDuotoneProps };
