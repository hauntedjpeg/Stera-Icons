import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserFillProps = Omit<IconBaseProps, 'children'>;

const BrowserFill = memo(
  forwardRef<SVGSVGElement, BrowserFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.88 14.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-2.32h19.75z" />
        <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32H2.13V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-8.2 2c-.48 0-.87.39-.87.87s.39.88.87.88h8c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserFill.displayName = 'BrowserFill';

// Triple export pattern
export { BrowserFill, BrowserFill as BrowserFillIcon, BrowserFill as SiBrowserFill };
export default BrowserFill;
export type { BrowserFillProps };
