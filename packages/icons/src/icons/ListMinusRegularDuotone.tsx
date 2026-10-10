import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListMinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListMinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 10.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.5 9.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25 2.35-5.25 5.25-5.25m-2.5 4.5c-.41 0-.75.34-.75.75s.34.75.75.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ListMinusRegularDuotone.displayName = 'ListMinusRegularDuotone';

// Triple export pattern
export { ListMinusRegularDuotone, ListMinusRegularDuotone as ListMinusRegularDuotoneIcon, ListMinusRegularDuotone as SiListMinusRegularDuotone };
export default ListMinusRegularDuotone;
export type { ListMinusRegularDuotoneProps };
