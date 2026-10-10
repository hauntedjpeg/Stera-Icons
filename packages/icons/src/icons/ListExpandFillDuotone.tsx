import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListExpandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListExpandFillDuotone = memo(
  forwardRef<SVGSVGElement, ListExpandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM11 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM11 5.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M21 14.63c.35 0 .67.2.8.53.14.33.07.7-.18.96l-3 3q-.26.24-.62.25-.36 0-.62-.25l-3-3c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54zM18 4.63q.36 0 .62.25l3 3c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-6c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95l3-3q.26-.25.62-.25" />
    </IconBase>
  ))
);

ListExpandFillDuotone.displayName = 'ListExpandFillDuotone';

// Triple export pattern
export { ListExpandFillDuotone, ListExpandFillDuotone as ListExpandFillDuotoneIcon, ListExpandFillDuotone as SiListExpandFillDuotone };
export default ListExpandFillDuotone;
export type { ListExpandFillDuotoneProps };
