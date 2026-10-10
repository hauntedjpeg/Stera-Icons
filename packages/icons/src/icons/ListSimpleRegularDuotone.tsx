import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 7.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M6 13.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75zM6 6.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListSimpleRegularDuotone.displayName = 'ListSimpleRegularDuotone';

// Triple export pattern
export { ListSimpleRegularDuotone, ListSimpleRegularDuotone as ListSimpleRegularDuotoneIcon, ListSimpleRegularDuotone as SiListSimpleRegularDuotone };
export default ListSimpleRegularDuotone;
export type { ListSimpleRegularDuotoneProps };
