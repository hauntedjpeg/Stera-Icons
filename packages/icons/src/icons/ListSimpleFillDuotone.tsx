import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.25a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM21 7.25a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5z" opacity={0.4} />
        <path d="M6 13.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88H3a.9.9 0 0 1-.87-.88v-3c0-.48.39-.87.87-.87zM6 6.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88H3a.9.9 0 0 1-.87-.88V7c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ListSimpleFillDuotone.displayName = 'ListSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListSimpleFillDuotone, ListSimpleFillDuotone as ListSimpleFillDuotoneIcon, ListSimpleFillDuotone as SiListSimpleFillDuotone };
export default ListSimpleFillDuotone;
export type { ListSimpleFillDuotoneProps };
