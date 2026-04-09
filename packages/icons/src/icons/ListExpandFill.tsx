import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListExpandFillProps = Omit<IconBaseProps, 'children'>;

const ListExpandFill = memo(
  forwardRef<SVGSVGElement, ListExpandFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-expand-fill" {...props}>
      <path d="M21 14.63a.88.88 0 0 1 .62 1.49l-3 3a.9.9 0 0 1-1.24 0l-3-3a.88.88 0 0 1 .62-1.5zM11 17.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75zM11 11.13a.88.88 0 0 1 0 1.74H3a.88.88 0 0 1 0-1.74zM18 4.63q.36 0 .62.25l3 3a.88.88 0 0 1-.62 1.5h-6a.88.88 0 0 1-.62-1.5l3-3a1 1 0 0 1 .62-.25M11 5.13a.88.88 0 0 1 0 1.75H3a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

ListExpandFill.displayName = 'ListExpandFill';

// Triple export pattern (lucide-react style)
export { ListExpandFill, ListExpandFill as ListExpandFillIcon, ListExpandFill as SiListExpandFill };
export default ListExpandFill;
export type { ListExpandFillProps };
