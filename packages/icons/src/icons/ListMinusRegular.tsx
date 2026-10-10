import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusRegularProps = Omit<IconBaseProps, 'children'>;

const ListMinusRegular = memo(
  forwardRef<SVGSVGElement, ListMinusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 9.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25 2.35-5.25 5.25-5.25m-2.5 4.5c-.41 0-.75.34-.75.75s.34.75.75.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" clipRule="evenodd" />
        <path d="M9 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 10.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListMinusRegular.displayName = 'ListMinusRegular';

// Triple export pattern
export { ListMinusRegular, ListMinusRegular as ListMinusRegularIcon, ListMinusRegular as SiListMinusRegular };
export default ListMinusRegular;
export type { ListMinusRegularProps };
