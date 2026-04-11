import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListExpandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListExpandFillDuotone = memo(
  forwardRef<SVGSVGElement, ListExpandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75zM11 11.13a.88.88 0 0 1 0 1.74H3a.88.88 0 0 1 0-1.74zM11 5.13a.88.88 0 0 1 0 1.75H3a.87.87 0 1 1 0-1.75z" opacity={0.4} />
        <path d="M21 14.63a.88.88 0 0 1 .62 1.49l-3 3a.9.9 0 0 1-1.24 0l-3-3a.88.88 0 0 1 .62-1.5zM18 4.63q.36 0 .62.25l3 3a.88.88 0 0 1-.62 1.5h-6a.88.88 0 0 1-.62-1.5l3-3a1 1 0 0 1 .62-.25" />
    </IconBase>
  ))
);

ListExpandFillDuotone.displayName = 'ListExpandFillDuotone';

// Triple export pattern (lucide-react style)
export { ListExpandFillDuotone, ListExpandFillDuotone as ListExpandFillDuotoneIcon, ListExpandFillDuotone as SiListExpandFillDuotone };
export default ListExpandFillDuotone;
export type { ListExpandFillDuotoneProps };
