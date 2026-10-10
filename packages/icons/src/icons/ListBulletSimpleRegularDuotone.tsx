import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 7.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M4.5 13.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25M4.5 6.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25" />
    </IconBase>
  ))
);

ListBulletSimpleRegularDuotone.displayName = 'ListBulletSimpleRegularDuotone';

// Triple export pattern
export { ListBulletSimpleRegularDuotone, ListBulletSimpleRegularDuotone as ListBulletSimpleRegularDuotoneIcon, ListBulletSimpleRegularDuotone as SiListBulletSimpleRegularDuotone };
export default ListBulletSimpleRegularDuotone;
export type { ListBulletSimpleRegularDuotoneProps };
