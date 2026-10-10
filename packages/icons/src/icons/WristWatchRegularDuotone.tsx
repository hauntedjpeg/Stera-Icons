import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchRegularDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.75 19.5c0 1.52-1.23 2.75-2.75 2.75h-4c-1.52 0-2.75-1.23-2.75-2.75v-2.7q.67.65 1.5 1.12v1.58c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-1.58q.83-.46 1.5-1.13zM14 1.75c1.52 0 2.75 1.23 2.75 2.75v2.7q-.67-.66-1.5-1.12V4.5c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.58q-.83.46-1.5 1.12V4.5c0-1.52 1.23-2.75 2.75-2.75z" opacity={0.4} />
        <path d="M12 8.75c.41 0 .75.34.75.75v2.19l1.28 1.28c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.5-1.5q-.21-.22-.22-.53V9.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 5.25c3.73 0 6.75 3.02 6.75 6.75s-3.02 6.75-6.75 6.75S5.25 15.73 5.25 12 8.27 5.25 12 5.25m0 1.5C9.1 6.75 6.75 9.1 6.75 12S9.1 17.25 12 17.25s5.25-2.35 5.25-5.25S14.9 6.75 12 6.75" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchRegularDuotone.displayName = 'WristWatchRegularDuotone';

// Triple export pattern
export { WristWatchRegularDuotone, WristWatchRegularDuotone as WristWatchRegularDuotoneIcon, WristWatchRegularDuotone as SiWristWatchRegularDuotone };
export default WristWatchRegularDuotone;
export type { WristWatchRegularDuotoneProps };
