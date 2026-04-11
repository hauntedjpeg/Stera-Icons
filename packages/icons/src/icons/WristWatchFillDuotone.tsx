import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchFillDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.13a6.87 6.87 0 1 1 0 13.74 6.87 6.87 0 0 1 0-13.74m0 3.5c-.48 0-.87.39-.87.87V12q0 .36.25.62l1.5 1.5a.88.88 0 0 0 1.24-1.24l-1.24-1.24V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M16.88 19.5A2.9 2.9 0 0 1 14 22.38h-4a2.9 2.9 0 0 1-2.87-2.88v-2.65a6.85 6.85 0 0 0 9.75 0zM14 1.63a2.9 2.9 0 0 1 2.88 2.87v2.65a6.85 6.85 0 0 0-9.75 0V4.5A2.87 2.87 0 0 1 10 1.63zM12 8.63c.48 0 .88.39.88.87v2.14l1.24 1.24a.88.88 0 0 1-1.24 1.24l-1.5-1.5a1 1 0 0 1-.26-.62V9.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

WristWatchFillDuotone.displayName = 'WristWatchFillDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchFillDuotone, WristWatchFillDuotone as WristWatchFillDuotoneIcon, WristWatchFillDuotone as SiWristWatchFillDuotone };
export default WristWatchFillDuotone;
export type { WristWatchFillDuotoneProps };
