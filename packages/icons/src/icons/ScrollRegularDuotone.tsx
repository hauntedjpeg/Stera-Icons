import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScrollRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.25 15.25c1.1 0 2 .9 2 2V18c0 1.52-1.23 2.75-2.75 2.75h-11v-1.5c.69 0 1.25-.56 1.25-1.25v-.75c0-1.1.9-2 2-2zm-8.5 1.5c-.28 0-.5.22-.5.5V18q0 .68-.3 1.25h8.55c.69 0 1.25-.56 1.25-1.25v-.75c0-.28-.22-.5-.5-.5z" clipRule="evenodd" opacity={0.4} />
        <path d="M4.5 4.75c-.69 0-1.25.56-1.25 1.25v2.25c0 .28.22.5.5.5h2v1.5h-2c-1.1 0-2-.9-2-2V6c0-1.52 1.23-2.75 2.75-2.75z" opacity={0.4} />
        <path d="M16.5 3.25c1.52 0 2.75 1.23 2.75 2.75v9.25h-1.5V6c0-.69-.56-1.25-1.25-1.25H6.95q.3.57.3 1.25v12c0 .69.56 1.25 1.25 1.25v1.5c-1.52 0-2.75-1.23-2.75-2.75V6c0-.69-.56-1.25-1.25-1.25v-1.5z" />
    </IconBase>
  ))
);

ScrollRegularDuotone.displayName = 'ScrollRegularDuotone';

// Triple export pattern
export { ScrollRegularDuotone, ScrollRegularDuotone as ScrollRegularDuotoneIcon, ScrollRegularDuotone as SiScrollRegularDuotone };
export default ScrollRegularDuotone;
export type { ScrollRegularDuotoneProps };
