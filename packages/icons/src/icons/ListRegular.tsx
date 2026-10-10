import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListRegularProps = Omit<IconBaseProps, 'children'>;

const ListRegular = memo(
  forwardRef<SVGSVGElement, ListRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 16.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75zM20 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6 4.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75zM20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListRegular.displayName = 'ListRegular';

// Triple export pattern
export { ListRegular, ListRegular as ListRegularIcon, ListRegular as SiListRegular };
export default ListRegular;
export type { ListRegularProps };
