import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleFill = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 13.13c1.31 0 2.38 1.06 2.38 2.37S5.8 17.88 4.5 17.88 2.13 16.8 2.13 15.5s1.06-2.37 2.37-2.37M21 14.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM4.5 6.13c1.31 0 2.38 1.06 2.38 2.37S5.8 10.88 4.5 10.88 2.13 9.8 2.13 8.5 3.19 6.13 4.5 6.13M21 7.25c.69 0 1.25.56 1.25 1.25S21.69 9.75 21 9.75H10c-.69 0-1.25-.56-1.25-1.25S9.31 7.25 10 7.25z" />
    </IconBase>
  ))
);

ListBulletSimpleFill.displayName = 'ListBulletSimpleFill';

// Triple export pattern
export { ListBulletSimpleFill, ListBulletSimpleFill as ListBulletSimpleFillIcon, ListBulletSimpleFill as SiListBulletSimpleFill };
export default ListBulletSimpleFill;
export type { ListBulletSimpleFillProps };
