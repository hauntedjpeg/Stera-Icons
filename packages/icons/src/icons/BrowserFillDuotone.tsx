import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrowserFillDuotone = memo(
  forwardRef<SVGSVGElement, BrowserFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-fill-duotone" {...props}>
      <path d="M21.88 14.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-2.32h19.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32H2.13V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-8.2 2a.87.87 0 1 0 0 1.75h8a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path d="M16 6.13a.88.88 0 0 1 0 1.75H8a.87.87 0 1 1 0-1.75zM21.88 11.88H2.13v-1.76h19.75z" />
    </IconBase>
  ))
);

BrowserFillDuotone.displayName = 'BrowserFillDuotone';

// Triple export pattern (lucide-react style)
export { BrowserFillDuotone, BrowserFillDuotone as BrowserFillDuotoneIcon, BrowserFillDuotone as SiBrowserFillDuotone };
export default BrowserFillDuotone;
export type { BrowserFillDuotoneProps };
