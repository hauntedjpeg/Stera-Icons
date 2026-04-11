import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusFillProps = Omit<IconBaseProps, 'children'>;

const ListMinusFill = memo(
  forwardRef<SVGSVGElement, ListMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M15 13.6a.9.9 0 0 0 0 1.8h5a.9.9 0 0 0 0-1.8z" clipRule="evenodd" />
        <path d="M9 14.75a1.25 1.25 0 1 1 0 2.5H2a1.25 1.25 0 1 1 0-2.5zM9 9.75a1.25 1.25 0 1 1 0 2.5H2a1.25 1.25 0 1 1 0-2.5zM22 4.75a1.25 1.25 0 1 1 0 2.5H2a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ListMinusFill.displayName = 'ListMinusFill';

// Triple export pattern (lucide-react style)
export { ListMinusFill, ListMinusFill as ListMinusFillIcon, ListMinusFill as SiListMinusFill };
export default ListMinusFill;
export type { ListMinusFillProps };
