import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScrollBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.25 15c1.24 0 2.25 1 2.25 2.25V18c0 1.66-1.34 3-3 3h-11v-2c.55 0 1-.45 1-1v-.75c0-1.24 1-2.25 2.25-2.25zm-8.5 2q-.23.02-.25.25V18q0 .53-.17 1h8.17c.55 0 1-.45 1-1v-.75q-.02-.23-.25-.25z" clipRule="evenodd" opacity={0.4} />
        <path d="M4.5 5c-.55 0-1 .45-1 1v2.25c0 .14.11.25.25.25H5.5v2H3.75c-1.24 0-2.25-1-2.25-2.25V6c0-1.66 1.34-3 3-3z" opacity={0.4} />
        <path d="M16.5 3c1.66 0 3 1.34 3 3v9h-2V6c0-.55-.45-1-1-1H7.33q.16.47.17 1v12c0 .55.45 1 1 1v2c-1.66 0-3-1.34-3-3V6c0-.55-.45-1-1-1V3z" />
    </IconBase>
  ))
);

ScrollBoldDuotone.displayName = 'ScrollBoldDuotone';

// Triple export pattern
export { ScrollBoldDuotone, ScrollBoldDuotone as ScrollBoldDuotoneIcon, ScrollBoldDuotone as SiScrollBoldDuotone };
export default ScrollBoldDuotone;
export type { ScrollBoldDuotoneProps };
