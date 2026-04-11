import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFill = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.14 12.6a1.25 1.25 0 0 1 1.72 1.8l-4.2 4a1.25 1.25 0 0 1-1.84-.13L2.02 16a1.25 1.25 0 0 1 1.96-1.55l.95 1.2zM21 14.25a1.25 1.25 0 0 1 0 2.5h-8a1.25 1.25 0 0 1 0-2.5zM8.14 5.6a1.25 1.25 0 0 1 1.72 1.8l-4.2 4a1.25 1.25 0 0 1-1.84-.13L2.02 9a1.25 1.25 0 0 1 1.96-1.55l.95 1.2zM21 7.25a1.25 1.25 0 0 1 0 2.5h-8a1.25 1.25 0 0 1 0-2.5z" />
    </IconBase>
  ))
);

ListCheckSimpleFill.displayName = 'ListCheckSimpleFill';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleFill, ListCheckSimpleFill as ListCheckSimpleFillIcon, ListCheckSimpleFill as SiListCheckSimpleFill };
export default ListCheckSimpleFill;
export type { ListCheckSimpleFillProps };
