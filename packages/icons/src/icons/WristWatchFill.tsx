import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchFillProps = Omit<IconBaseProps, 'children'>;

const WristWatchFill = memo(
  forwardRef<SVGSVGElement, WristWatchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-fill" {...props}>
      <path fillRule="evenodd" d="M14 1.63a2.9 2.9 0 0 1 2.88 2.87v2.65a6.85 6.85 0 0 1 0 9.7v2.65A2.9 2.9 0 0 1 14 22.38h-4a2.9 2.9 0 0 1-2.87-2.88v-2.65a6.85 6.85 0 0 1 0-9.7V4.5A2.87 2.87 0 0 1 10 1.63zm1.13 16.5a6.8 6.8 0 0 1-6.26 0v1.37c0 .62.5 1.13 1.13 1.13h4c.62 0 1.13-.5 1.13-1.13zM12 8.62c-.48 0-.87.39-.87.87V12q0 .36.25.62l1.5 1.5a.88.88 0 0 0 1.24-1.24l-1.24-1.24V9.5c0-.48-.4-.87-.88-.87m-2-5.26c-.62 0-1.12.5-1.12 1.13v1.38a6.8 6.8 0 0 1 6.24 0V4.5c0-.62-.5-1.12-1.12-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchFill.displayName = 'WristWatchFill';

// Triple export pattern (lucide-react style)
export { WristWatchFill, WristWatchFill as WristWatchFillIcon, WristWatchFill as SiWristWatchFill };
export default WristWatchFill;
export type { WristWatchFillProps };
