import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchFillDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.13c3.8 0 6.88 3.07 6.88 6.87S15.8 18.88 12 18.88 5.13 15.8 5.13 12 8.2 5.13 12 5.13m0 3.5c-.48 0-.87.39-.87.87V12q0 .36.25.62l1.5 1.5c.34.34.9.34 1.24 0s.34-.9 0-1.24l-1.24-1.24V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M16.88 19.5c0 1.59-1.3 2.88-2.88 2.88h-4c-1.59 0-2.87-1.3-2.87-2.88v-2.65c1.24 1.25 2.96 2.02 4.87 2.02 1.9 0 3.63-.77 4.88-2.02zM14 1.63c1.59 0 2.88 1.28 2.88 2.87v2.65C15.63 5.9 13.9 5.12 12 5.12s-3.63.78-4.87 2.03V4.5c0-1.59 1.28-2.87 2.87-2.87zM12 8.63c.48 0 .88.39.88.87v2.14l1.24 1.24c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1.5-1.5q-.25-.26-.26-.62V9.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

WristWatchFillDuotone.displayName = 'WristWatchFillDuotone';

// Triple export pattern
export { WristWatchFillDuotone, WristWatchFillDuotone as WristWatchFillDuotoneIcon, WristWatchFillDuotone as SiWristWatchFillDuotone };
export default WristWatchFillDuotone;
export type { WristWatchFillDuotoneProps };
