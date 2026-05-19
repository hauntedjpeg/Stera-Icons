import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryBold = memo(
  forwardRef<SVGSVGElement, LayoutMasonryBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9 14c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H4.75c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zm-4.25 2a.25.25 0 0 0-.25.25v3c0 .14.11.25.25.25H9q.23-.02.25-.25v-3A.25.25 0 0 0 9 16zM19.25 11.5c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25H15c-1.24 0-2.25-1-2.25-2.25v-5.5c0-1.24 1-2.25 2.25-2.25zm-4.25 2a.25.25 0 0 0-.25.25v5.5q.02.23.25.25h4.25q.23-.02.25-.25v-5.5a.25.25 0 0 0-.25-.25zM9 2.5c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25H4.75c-1.24 0-2.25-1-2.25-2.25v-5.5c0-1.24 1-2.25 2.25-2.25zm-4.25 2a.25.25 0 0 0-.25.25v5.5c0 .14.11.25.25.25H9q.23-.02.25-.25v-5.5A.25.25 0 0 0 9 4.5zM19.25 2.5c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H15c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zM15 4.5a.25.25 0 0 0-.25.25v3c0 .14.11.25.25.25h4.25c.14 0 .25-.11.25-.25v-3a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutMasonryBold.displayName = 'LayoutMasonryBold';

// Triple export pattern (lucide-react style)
export { LayoutMasonryBold, LayoutMasonryBold as LayoutMasonryBoldIcon, LayoutMasonryBold as SiLayoutMasonryBold };
export default LayoutMasonryBold;
export type { LayoutMasonryBoldProps };
