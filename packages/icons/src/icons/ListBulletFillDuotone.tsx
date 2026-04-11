import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletFillDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 16.75a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM20 10.75a1.25 1.25 0 0 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM20 4.75a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5z" opacity={0.4} />
        <path d="M5 16.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.75M5 10.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.76M5 4.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.75" />
    </IconBase>
  ))
);

ListBulletFillDuotone.displayName = 'ListBulletFillDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletFillDuotone, ListBulletFillDuotone as ListBulletFillDuotoneIcon, ListBulletFillDuotone as SiListBulletFillDuotone };
export default ListBulletFillDuotone;
export type { ListBulletFillDuotoneProps };
