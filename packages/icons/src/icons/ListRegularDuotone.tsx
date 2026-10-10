import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M6 16.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75zM6 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75zM6 4.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListRegularDuotone.displayName = 'ListRegularDuotone';

// Triple export pattern
export { ListRegularDuotone, ListRegularDuotone as ListRegularDuotoneIcon, ListRegularDuotone as SiListRegularDuotone };
export default ListRegularDuotone;
export type { ListRegularDuotoneProps };
