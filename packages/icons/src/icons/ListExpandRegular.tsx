import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListExpandRegularProps = Omit<IconBaseProps, 'children'>;

const ListExpandRegular = memo(
  forwardRef<SVGSVGElement, ListExpandRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.47 14.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3 3q-.22.22-.53.22t-.53-.22l-3-3c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L18 17.44zM11 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM11 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 4.75q.31 0 .53.22l3 3c.3.3.3.77 0 1.06s-.77.3-1.06 0L18 6.56l-2.47 2.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3-3q.22-.21.53-.22M11 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListExpandRegular.displayName = 'ListExpandRegular';

// Triple export pattern
export { ListExpandRegular, ListExpandRegular as ListExpandRegularIcon, ListExpandRegular as SiListExpandRegular };
export default ListExpandRegular;
export type { ListExpandRegularProps };
