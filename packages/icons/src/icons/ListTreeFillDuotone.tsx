import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListTreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListTreeFillDuotone = memo(
  forwardRef<SVGSVGElement, ListTreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-tree-fill-duotone" {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v4c0 .97.78 1.75 1.75 1.75h2a1.25 1.25 0 1 1 0 2.5H6q-.94-.01-1.75-.38V16c0 .97.78 1.75 1.75 1.75h2a1.25 1.25 0 1 1 0 2.5H6A4.25 4.25 0 0 1 1.75 16V5c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M21 17.75a1.25 1.25 0 1 1 0 2.5h-8a1.25 1.25 0 1 1 0-2.5zM21 10.75a1.25 1.25 0 1 1 0 2.5h-8a1.25 1.25 0 1 1 0-2.5zM21 3.75a1.25 1.25 0 1 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ListTreeFillDuotone.displayName = 'ListTreeFillDuotone';

// Triple export pattern (lucide-react style)
export { ListTreeFillDuotone, ListTreeFillDuotone as ListTreeFillDuotoneIcon, ListTreeFillDuotone as SiListTreeFillDuotone };
export default ListTreeFillDuotone;
export type { ListTreeFillDuotoneProps };
