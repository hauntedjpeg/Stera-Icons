import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListTreeBoldProps = Omit<IconBaseProps, 'children'>;

const ListTreeBold = memo(
  forwardRef<SVGSVGElement, ListTreeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4c.55 0 1 .45 1 1v4c0 1.1.9 2 2 2h2c.55 0 1 .45 1 1s-.45 1-1 1H6q-1.1-.01-2-.54V16c0 1.1.9 2 2 2h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-2.2 0-4-1.8-4-4V5c0-.55.45-1 1-1M21 18c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM21 4c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListTreeBold.displayName = 'ListTreeBold';

// Triple export pattern
export { ListTreeBold, ListTreeBold as ListTreeBoldIcon, ListTreeBold as SiListTreeBold };
export default ListTreeBold;
export type { ListTreeBoldProps };
