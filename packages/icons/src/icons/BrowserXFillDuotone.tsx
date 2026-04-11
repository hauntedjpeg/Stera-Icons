import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrowserXFillDuotone = memo(
  forwardRef<SVGSVGElement, BrowserXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.88 13.63a1 1 0 0 0-.5.25l-2.13 2.13-2.13-2.13a.88.88 0 0 0-1.24 1.24l2.13 2.13-2.13 2.13a1 1 0 0 0-.25.5H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-2.32h19.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32H2.13V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-8.2 2a.87.87 0 1 0 0 1.75h8a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path d="M21.38 13.88a.88.88 0 0 1 1.24 1.24l-2.13 2.13 2.13 2.13a.88.88 0 0 1-1.24 1.24l-2.13-2.13-2.13 2.13a.88.88 0 0 1-1.24-1.24l2.13-2.13-2.13-2.13a.88.88 0 0 1 1.24-1.24l2.13 2.13zM21.88 11.88H2.13v-1.76h19.75zM16 6.13a.88.88 0 0 1 0 1.75H8a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BrowserXFillDuotone.displayName = 'BrowserXFillDuotone';

// Triple export pattern (lucide-react style)
export { BrowserXFillDuotone, BrowserXFillDuotone as BrowserXFillDuotoneIcon, BrowserXFillDuotone as SiBrowserXFillDuotone };
export default BrowserXFillDuotone;
export type { BrowserXFillDuotoneProps };
