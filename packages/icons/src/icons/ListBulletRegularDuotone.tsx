import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M5 16.25c.97 0 1.75.78 1.75 1.75S5.97 19.75 5 19.75 3.25 18.97 3.25 18s.78-1.75 1.75-1.75M5 10.25c.97 0 1.75.78 1.75 1.75S5.97 13.75 5 13.75 3.25 12.97 3.25 12s.78-1.75 1.75-1.75M5 4.25c.97 0 1.75.78 1.75 1.75S5.97 7.75 5 7.75 3.25 6.97 3.25 6 4.03 4.25 5 4.25" />
    </IconBase>
  ))
);

ListBulletRegularDuotone.displayName = 'ListBulletRegularDuotone';

// Triple export pattern
export { ListBulletRegularDuotone, ListBulletRegularDuotone as ListBulletRegularDuotoneIcon, ListBulletRegularDuotone as SiListBulletRegularDuotone };
export default ListBulletRegularDuotone;
export type { ListBulletRegularDuotoneProps };
