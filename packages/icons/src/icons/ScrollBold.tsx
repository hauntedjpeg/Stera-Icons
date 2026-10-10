import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollBoldProps = Omit<IconBaseProps, 'children'>;

const ScrollBold = memo(
  forwardRef<SVGSVGElement, ScrollBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 3c1.66 0 3 1.34 3 3v9h.75c1.24 0 2.25 1 2.25 2.25V18c0 1.66-1.34 3-3 3h-11c-1.66 0-3-1.34-3-3v-7.5H3.75c-1.24 0-2.25-1-2.25-2.25V6c0-1.66 1.34-3 3-3zm-4.75 14q-.23.02-.25.25V18q0 .53-.17 1h8.17c.55 0 1-.45 1-1v-.75q-.02-.23-.25-.25zM7.33 5q.16.47.17 1v12c0 .55.45 1 1 1h.1c.5-.06.9-.48.9-1v-.75c0-1.24 1-2.25 2.25-2.25h5.75V6c0-.55-.45-1-1-1zM4.5 5c-.55 0-1 .45-1 1v2.25c0 .14.11.25.25.25H5.5V6c0-.55-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollBold.displayName = 'ScrollBold';

// Triple export pattern
export { ScrollBold, ScrollBold as ScrollBoldIcon, ScrollBold as SiScrollBold };
export default ScrollBold;
export type { ScrollBoldProps };
