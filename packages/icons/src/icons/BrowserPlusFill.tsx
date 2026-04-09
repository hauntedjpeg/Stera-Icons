import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserPlusFillProps = Omit<IconBaseProps, 'children'>;

const BrowserPlusFill = memo(
  forwardRef<SVGSVGElement, BrowserPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-plus-fill" {...props}>
      <path d="M19 13.13c.48 0 .88.39.88.87v2.13H22a.88.88 0 0 1 0 1.75h-2.12V20a.88.88 0 0 1-1.75 0v-2.12H16a.88.88 0 0 1 0-1.75h2.13V14c0-.48.39-.87.87-.87" />
        <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05V11c0 .48-.4.88-.88.88H3.88v2.32c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h5.32a.88.88 0 0 1 0 1.75H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-8.2 3a.87.87 0 1 0 0 1.75h8a.88.88 0 0 0 0-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserPlusFill.displayName = 'BrowserPlusFill';

// Triple export pattern (lucide-react style)
export { BrowserPlusFill, BrowserPlusFill as BrowserPlusFillIcon, BrowserPlusFill as SiBrowserPlusFill };
export default BrowserPlusFill;
export type { BrowserPlusFillProps };
