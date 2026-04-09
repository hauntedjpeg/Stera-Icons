import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckFill = memo(
  forwardRef<SVGSVGElement, ListCheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-fill" {...props}>
      <path d="M6.09 15.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13l-1.2-1.72a1.25 1.25 0 0 1 2.04-1.43l.32.45zM21 16.75a1.25 1.25 0 1 1 0 2.5H11a1.25 1.25 0 0 1 0-2.5zM6.09 9.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13l-1.2-1.72a1.25 1.25 0 0 1 2.04-1.43l.32.45zM21 10.75a1.25 1.25 0 1 1 0 2.5H11a1.25 1.25 0 0 1 0-2.5zM6.09 3.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13L1.98 6.5a1.25 1.25 0 0 1 2.04-1.43l.32.45zM21 4.75a1.25 1.25 0 1 1 0 2.5H11a1.25 1.25 0 0 1 0-2.5z" />
    </IconBase>
  ))
);

ListCheckFill.displayName = 'ListCheckFill';

// Triple export pattern (lucide-react style)
export { ListCheckFill, ListCheckFill as ListCheckFillIcon, ListCheckFill as SiListCheckFill };
export default ListCheckFill;
export type { ListCheckFillProps };
