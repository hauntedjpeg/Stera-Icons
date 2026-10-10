import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletRegularProps = Omit<IconBaseProps, 'children'>;

const ListBulletRegular = memo(
  forwardRef<SVGSVGElement, ListBulletRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 16.25c.97 0 1.75.78 1.75 1.75S5.97 19.75 5 19.75 3.25 18.97 3.25 18s.78-1.75 1.75-1.75M20 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM5 10.25c.97 0 1.75.78 1.75 1.75S5.97 13.75 5 13.75 3.25 12.97 3.25 12s.78-1.75 1.75-1.75M20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM5 4.25c.97 0 1.75.78 1.75 1.75S5.97 7.75 5 7.75 3.25 6.97 3.25 6 4.03 4.25 5 4.25M20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListBulletRegular.displayName = 'ListBulletRegular';

// Triple export pattern
export { ListBulletRegular, ListBulletRegular as ListBulletRegularIcon, ListBulletRegular as SiListBulletRegular };
export default ListBulletRegular;
export type { ListBulletRegularProps };
