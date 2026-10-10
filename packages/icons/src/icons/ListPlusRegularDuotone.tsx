import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 10.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.5 9.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25 2.35-5.25 5.25-5.25m0 2c-.41 0-.75.34-.75.75v1.75H15c-.41 0-.75.34-.75.75s.34.75.75.75h1.75V17c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75V12c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ListPlusRegularDuotone.displayName = 'ListPlusRegularDuotone';

// Triple export pattern
export { ListPlusRegularDuotone, ListPlusRegularDuotone as ListPlusRegularDuotoneIcon, ListPlusRegularDuotone as SiListPlusRegularDuotone };
export default ListPlusRegularDuotone;
export type { ListPlusRegularDuotoneProps };
