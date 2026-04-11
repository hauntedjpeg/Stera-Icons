import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletFillProps = Omit<IconBaseProps, 'children'>;

const ListBulletFill = memo(
  forwardRef<SVGSVGElement, ListBulletFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 16.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.75M20 16.75a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM5 10.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.76M20 10.75a1.25 1.25 0 0 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM5 4.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.75M20 4.75a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ListBulletFill.displayName = 'ListBulletFill';

// Triple export pattern (lucide-react style)
export { ListBulletFill, ListBulletFill as ListBulletFillIcon, ListBulletFill as SiListBulletFill };
export default ListBulletFill;
export type { ListBulletFillProps };
