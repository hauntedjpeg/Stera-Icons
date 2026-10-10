import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchRegularProps = Omit<IconBaseProps, 'children'>;

const WristWatchRegular = memo(
  forwardRef<SVGSVGElement, WristWatchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 8.75c.41 0 .75.34.75.75v2.19l1.28 1.28c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.5-1.5q-.21-.22-.22-.53V9.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M14 1.75c1.52 0 2.75 1.23 2.75 2.75v2.7c1.23 1.23 2 2.92 2 4.8s-.77 3.57-2 4.8v2.7c0 1.52-1.23 2.75-2.75 2.75h-4c-1.52 0-2.75-1.23-2.75-2.75v-2.7c-1.23-1.23-2-2.92-2-4.8s.76-3.57 2-4.8V4.5c0-1.52 1.23-2.75 2.75-2.75zm1.25 16.17q-1.46.81-3.25.83-1.79-.02-3.25-.83v1.58c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25zM12 6.75C9.1 6.75 6.75 9.1 6.75 12S9.1 17.25 12 17.25s5.25-2.35 5.25-5.25S14.9 6.75 12 6.75m-2-3.5c-.69 0-1.25.56-1.25 1.25v1.58q1.46-.81 3.25-.83 1.79.02 3.25.83V4.5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchRegular.displayName = 'WristWatchRegular';

// Triple export pattern
export { WristWatchRegular, WristWatchRegular as WristWatchRegularIcon, WristWatchRegular as SiWristWatchRegular };
export default WristWatchRegular;
export type { WristWatchRegularProps };
