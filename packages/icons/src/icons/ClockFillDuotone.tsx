import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockFillDuotone = memo(
  forwardRef<SVGSVGElement, ClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5l.01.17.05.17.01.02q.07.15.18.26l2.83 2.83a.88.88 0 0 0 1.24-1.24l-2.57-2.57V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.64l2.57 2.57a.88.88 0 0 1-1.24 1.24l-2.83-2.83a1 1 0 0 1-.18-.26v-.02l-.06-.16v-.01l-.02-.17V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ClockFillDuotone.displayName = 'ClockFillDuotone';

// Triple export pattern (lucide-react style)
export { ClockFillDuotone, ClockFillDuotone as ClockFillDuotoneIcon, ClockFillDuotone as SiClockFillDuotone };
export default ClockFillDuotone;
export type { ClockFillDuotoneProps };
