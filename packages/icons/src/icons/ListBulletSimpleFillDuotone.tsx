import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.25a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM21 7.25a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5z" opacity={0.4} />
        <path d="M4.5 13.13a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.75M4.5 6.13a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74" />
    </IconBase>
  ))
);

ListBulletSimpleFillDuotone.displayName = 'ListBulletSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleFillDuotone, ListBulletSimpleFillDuotone as ListBulletSimpleFillDuotoneIcon, ListBulletSimpleFillDuotone as SiListBulletSimpleFillDuotone };
export default ListBulletSimpleFillDuotone;
export type { ListBulletSimpleFillDuotoneProps };
