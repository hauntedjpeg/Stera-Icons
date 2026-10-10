import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM20 11c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M5 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M5 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

ListBulletBoldDuotone.displayName = 'ListBulletBoldDuotone';

// Triple export pattern
export { ListBulletBoldDuotone, ListBulletBoldDuotone as ListBulletBoldDuotoneIcon, ListBulletBoldDuotone as SiListBulletBoldDuotone };
export default ListBulletBoldDuotone;
export type { ListBulletBoldDuotoneProps };
