import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListTreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListTreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListTreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4c.55 0 1 .45 1 1v4c0 1.1.9 2 2 2h2c.55 0 1 .45 1 1s-.45 1-1 1H6q-1.1-.01-2-.54V16c0 1.1.9 2 2 2h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-2.2 0-4-1.8-4-4V5c0-.55.45-1 1-1" opacity={.4} />
        <path d="M21 18c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM21 4c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListTreeBoldDuotone.displayName = 'ListTreeBoldDuotone';

// Triple export pattern
export { ListTreeBoldDuotone, ListTreeBoldDuotone as ListTreeBoldDuotoneIcon, ListTreeBoldDuotone as SiListTreeBoldDuotone };
export default ListTreeBoldDuotone;
export type { ListTreeBoldDuotoneProps };
