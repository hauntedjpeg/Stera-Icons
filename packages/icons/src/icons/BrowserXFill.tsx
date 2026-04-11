import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserXFillProps = Omit<IconBaseProps, 'children'>;

const BrowserXFill = memo(
  forwardRef<SVGSVGElement, BrowserXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.38 13.88a.88.88 0 0 1 1.24 1.24l-2.13 2.13 2.13 2.13a.88.88 0 0 1-1.24 1.24l-2.13-2.13-2.13 2.13a.88.88 0 0 1-1.24-1.24l2.13-2.13-2.13-2.13a.88.88 0 0 1 1.24-1.24l2.13 2.13z" />
        <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05V11c0 .48-.4.88-.88.88H3.88v2.32c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h5.32a.88.88 0 0 1 0 1.75H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-8.2 3a.87.87 0 1 0 0 1.75h8a.88.88 0 0 0 0-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserXFill.displayName = 'BrowserXFill';

// Triple export pattern (lucide-react style)
export { BrowserXFill, BrowserXFill as BrowserXFillIcon, BrowserXFill as SiBrowserXFill };
export default BrowserXFill;
export type { BrowserXFillProps };
