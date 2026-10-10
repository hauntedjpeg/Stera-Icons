import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListTreeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListTreeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListTreeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4.25c.41 0 .75.34.75.75v4c0 1.24 1 2.25 2.25 2.25h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.84 0-1.62-.28-2.25-.75v4c0 1.24 1 2.25 2.25 2.25h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-2.07 0-3.75-1.68-3.75-3.75V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M21 18.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 4.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListTreeRegularDuotone.displayName = 'ListTreeRegularDuotone';

// Triple export pattern
export { ListTreeRegularDuotone, ListTreeRegularDuotone as ListTreeRegularDuotoneIcon, ListTreeRegularDuotone as SiListTreeRegularDuotone };
export default ListTreeRegularDuotone;
export type { ListTreeRegularDuotoneProps };
