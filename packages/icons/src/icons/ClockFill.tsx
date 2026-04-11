import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockFillProps = Omit<IconBaseProps, 'children'>;

const ClockFill = memo(
  forwardRef<SVGSVGElement, ClockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5l.01.17.05.17.01.02q.07.15.18.26l2.83 2.83a.88.88 0 0 0 1.24-1.24l-2.57-2.57V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockFill.displayName = 'ClockFill';

// Triple export pattern (lucide-react style)
export { ClockFill, ClockFill as ClockFillIcon, ClockFill as SiClockFill };
export default ClockFill;
export type { ClockFillProps };
