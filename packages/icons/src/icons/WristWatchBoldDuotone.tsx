import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchBoldDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 19.5c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-2.6q.87.88 2 1.43v1.17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1.17q1.13-.55 2-1.43zM14 1.5c1.66 0 3 1.34 3 3v2.6q-.87-.88-2-1.43V4.5c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1.17q-1.13.55-2 1.43V4.5c0-1.66 1.34-3 3-3z" opacity={0.4} />
        <path d="M12 8.5c.55 0 1 .45 1 1v2.09l1.2 1.2c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1.5-1.5q-.3-.3-.3-.71V9.5c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 5c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7m0 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchBoldDuotone.displayName = 'WristWatchBoldDuotone';

// Triple export pattern
export { WristWatchBoldDuotone, WristWatchBoldDuotone as WristWatchBoldDuotoneIcon, WristWatchBoldDuotone as SiWristWatchBoldDuotone };
export default WristWatchBoldDuotone;
export type { WristWatchBoldDuotoneProps };
