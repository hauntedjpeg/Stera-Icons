import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchBoldProps = Omit<IconBaseProps, 'children'>;

const WristWatchBold = memo(
  forwardRef<SVGSVGElement, WristWatchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 8.5c.55 0 1 .45 1 1v2.09l1.2 1.2c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1.5-1.5q-.3-.3-.3-.71V9.5c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M14 1.5c1.66 0 3 1.34 3 3v2.6c1.24 1.26 2 3 2 4.9s-.76 3.64-2 4.9v2.6c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-2.6c-1.24-1.26-2-3-2-4.9s.76-3.64 2-4.9V4.5c0-1.66 1.34-3 3-3zm1 16.83c-.9.43-1.93.67-3 .67s-2.1-.24-3-.67v1.17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-2-3.5c-.55 0-1 .45-1 1v1.17c.9-.43 1.93-.67 3-.67s2.1.24 3 .67V4.5c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchBold.displayName = 'WristWatchBold';

// Triple export pattern
export { WristWatchBold, WristWatchBold as WristWatchBoldIcon, WristWatchBold as SiWristWatchBold };
export default WristWatchBold;
export type { WristWatchBoldProps };
