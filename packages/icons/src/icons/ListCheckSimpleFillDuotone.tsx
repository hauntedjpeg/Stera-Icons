import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple-fill-duotone" {...props}>
      <path d="M21 14.25a1.25 1.25 0 1 1 0 2.5h-8a1.25 1.25 0 0 1 0-2.5zM21 7.25a1.25 1.25 0 1 1 0 2.5h-8a1.25 1.25 0 0 1 0-2.5z" opacity={0.4} />
        <path d="M8.14 12.6a1.25 1.25 0 0 1 1.72 1.8l-4.2 4a1.25 1.25 0 0 1-1.84-.13L2.02 16a1.25 1.25 0 0 1 1.96-1.55l.95 1.2zM8.14 5.6a1.25 1.25 0 0 1 1.72 1.8l-4.2 4a1.25 1.25 0 0 1-1.84-.13L2.02 9a1.25 1.25 0 0 1 1.96-1.55l.95 1.2z" />
    </IconBase>
  ))
);

ListCheckSimpleFillDuotone.displayName = 'ListCheckSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleFillDuotone, ListCheckSimpleFillDuotone as ListCheckSimpleFillDuotoneIcon, ListCheckSimpleFillDuotone as SiListCheckSimpleFillDuotone };
export default ListCheckSimpleFillDuotone;
export type { ListCheckSimpleFillDuotoneProps };
