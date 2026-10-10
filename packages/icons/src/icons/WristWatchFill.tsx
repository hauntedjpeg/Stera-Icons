import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchFillProps = Omit<IconBaseProps, 'children'>;

const WristWatchFill = memo(
  forwardRef<SVGSVGElement, WristWatchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14 1.63c1.59 0 2.88 1.28 2.88 2.87v2.65c1.23 1.25 2 2.96 2 4.85 0 1.9-.77 3.6-2 4.85v2.65c0 1.59-1.3 2.88-2.88 2.88h-4c-1.59 0-2.87-1.3-2.87-2.88v-2.65c-1.24-1.25-2-2.96-2-4.85 0-1.9.76-3.6 2-4.85V4.5c0-1.59 1.28-2.87 2.87-2.87zm1.13 16.5c-.94.47-2 .75-3.13.75q-1.71-.02-3.12-.76v1.38c0 .62.5 1.13 1.12 1.13h4c.62 0 1.13-.5 1.13-1.13zM12 8.62c-.48 0-.87.39-.87.87V12q0 .36.25.62l1.5 1.5c.34.34.9.34 1.24 0s.34-.9 0-1.24l-1.24-1.24V9.5c0-.48-.4-.87-.88-.87m-2-5.26c-.62 0-1.12.5-1.12 1.13v1.38c.93-.48 2-.75 3.12-.75q1.7.01 3.13.75V4.5c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchFill.displayName = 'WristWatchFill';

// Triple export pattern
export { WristWatchFill, WristWatchFill as WristWatchFillIcon, WristWatchFill as SiWristWatchFill };
export default WristWatchFill;
export type { WristWatchFillProps };
