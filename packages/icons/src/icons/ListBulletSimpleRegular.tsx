import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 13.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25M21 14.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM4.5 6.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25M21 7.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListBulletSimpleRegular.displayName = 'ListBulletSimpleRegular';

// Triple export pattern
export { ListBulletSimpleRegular, ListBulletSimpleRegular as ListBulletSimpleRegularIcon, ListBulletSimpleRegular as SiListBulletSimpleRegular };
export default ListBulletSimpleRegular;
export type { ListBulletSimpleRegularProps };
