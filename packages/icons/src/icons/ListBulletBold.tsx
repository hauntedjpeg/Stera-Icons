import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletBoldProps = Omit<IconBaseProps, 'children'>;

const ListBulletBold = memo(
  forwardRef<SVGSVGElement, ListBulletBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M20 17c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M20 11c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM5 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M20 5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListBulletBold.displayName = 'ListBulletBold';

// Triple export pattern
export { ListBulletBold, ListBulletBold as ListBulletBoldIcon, ListBulletBold as SiListBulletBold };
export default ListBulletBold;
export type { ListBulletBoldProps };
