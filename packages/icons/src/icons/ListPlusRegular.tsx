import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListPlusRegularProps = Omit<IconBaseProps, 'children'>;

const ListPlusRegular = memo(
  forwardRef<SVGSVGElement, ListPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 9.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25 2.35-5.25 5.25-5.25m0 2c-.41 0-.75.34-.75.75v1.75H15c-.41 0-.75.34-.75.75s.34.75.75.75h1.75V17c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75V12c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
        <path d="M9 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 10.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListPlusRegular.displayName = 'ListPlusRegular';

// Triple export pattern
export { ListPlusRegular, ListPlusRegular as ListPlusRegularIcon, ListPlusRegular as SiListPlusRegular };
export default ListPlusRegular;
export type { ListPlusRegularProps };
