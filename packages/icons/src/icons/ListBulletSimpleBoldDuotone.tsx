import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM21 7.5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M4.5 13C5.88 13 7 14.12 7 15.5S5.88 18 4.5 18 2 16.88 2 15.5 3.12 13 4.5 13M4.5 6C5.88 6 7 7.12 7 8.5S5.88 11 4.5 11 2 9.88 2 8.5 3.12 6 4.5 6" />
    </IconBase>
  ))
);

ListBulletSimpleBoldDuotone.displayName = 'ListBulletSimpleBoldDuotone';

// Triple export pattern
export { ListBulletSimpleBoldDuotone, ListBulletSimpleBoldDuotone as ListBulletSimpleBoldDuotoneIcon, ListBulletSimpleBoldDuotone as SiListBulletSimpleBoldDuotone };
export default ListBulletSimpleBoldDuotone;
export type { ListBulletSimpleBoldDuotoneProps };
