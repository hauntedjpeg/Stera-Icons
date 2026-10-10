import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrowserXFillDuotone = memo(
  forwardRef<SVGSVGElement, BrowserXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.88 13.63q-.29.04-.5.25l-2.13 2.13-2.13-2.13c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2.13 2.13-2.13 2.13q-.2.21-.25.5H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-2.32h19.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32H2.13V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-8.2 2c-.48 0-.87.39-.87.87s.39.88.87.88h8c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={0.4} />
        <path d="M21.38 13.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.13 2.13 2.13 2.13c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.13-2.13-2.13 2.13c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2.13-2.13-2.13-2.13c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l2.13 2.13zM21.88 11.88H2.13v-1.76h19.75zM16 6.13c.48 0 .88.39.88.87s-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

BrowserXFillDuotone.displayName = 'BrowserXFillDuotone';

// Triple export pattern
export { BrowserXFillDuotone, BrowserXFillDuotone as BrowserXFillDuotoneIcon, BrowserXFillDuotone as SiBrowserXFillDuotone };
export default BrowserXFillDuotone;
export type { BrowserXFillDuotoneProps };
