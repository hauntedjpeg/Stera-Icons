import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleFill = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 13.13a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.75M21 14.25a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5zM4.5 6.13a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74M21 7.25a1.25 1.25 0 1 1 0 2.5H10a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ListBulletSimpleFill.displayName = 'ListBulletSimpleFill';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleFill, ListBulletSimpleFill as ListBulletSimpleFillIcon, ListBulletSimpleFill as SiListBulletSimpleFill };
export default ListBulletSimpleFill;
export type { ListBulletSimpleFillProps };
