import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockFillProps = Omit<IconBaseProps, 'children'>;

const ClockFill = memo(
  forwardRef<SVGSVGElement, ClockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v5l.01.17.04.13.01.04.01.02q.07.15.18.26l2.83 2.83c.34.34.9.34 1.24 0s.34-.9 0-1.24l-2.57-2.57V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockFill.displayName = 'ClockFill';

// Triple export pattern
export { ClockFill, ClockFill as ClockFillIcon, ClockFill as SiClockFill };
export default ClockFill;
export type { ClockFillProps };
