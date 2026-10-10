import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletFillProps = Omit<IconBaseProps, 'children'>;

const ListBulletFill = memo(
  forwardRef<SVGSVGElement, ListBulletFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 16.13c1.04 0 1.88.83 1.88 1.87S6.04 19.88 5 19.88 3.13 19.04 3.13 18s.83-1.87 1.87-1.87M20 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM5 10.13c1.04 0 1.88.83 1.88 1.87S6.04 13.88 5 13.88 3.13 13.04 3.13 12s.83-1.87 1.87-1.87M20 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM5 4.13c1.04 0 1.88.83 1.88 1.87S6.04 7.88 5 7.88 3.13 7.04 3.13 6 3.96 4.13 5 4.13M20 4.75c.69 0 1.25.56 1.25 1.25S20.69 7.25 20 7.25H10c-.69 0-1.25-.56-1.25-1.25S9.31 4.75 10 4.75z" />
    </IconBase>
  ))
);

ListBulletFill.displayName = 'ListBulletFill';

// Triple export pattern
export { ListBulletFill, ListBulletFill as ListBulletFillIcon, ListBulletFill as SiListBulletFill };
export default ListBulletFill;
export type { ListBulletFillProps };
