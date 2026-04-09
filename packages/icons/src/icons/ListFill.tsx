import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListFillProps = Omit<IconBaseProps, 'children'>;

const ListFill = memo(
  forwardRef<SVGSVGElement, ListFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-fill" {...props}>
      <path d="M6 16.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88H4a.9.9 0 0 1-.87-.88v-2c0-.48.39-.87.87-.87zM20 16.75a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM6 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88H4a.9.9 0 0 1-.87-.88v-2c0-.48.39-.87.87-.87zM20 10.75a1.25 1.25 0 0 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM6 4.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88H4A.87.87 0 0 1 3.13 7V5c0-.48.39-.87.87-.87zM20 4.75a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ListFill.displayName = 'ListFill';

// Triple export pattern (lucide-react style)
export { ListFill, ListFill as ListFillIcon, ListFill as SiListFill };
export default ListFill;
export type { ListFillProps };
