import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilterRegularDuotone = memo(
  forwardRef<SVGSVGElement, FilterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 11.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M14 16.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM22 6.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

FilterRegularDuotone.displayName = 'FilterRegularDuotone';

// Triple export pattern (lucide-react style)
export { FilterRegularDuotone, FilterRegularDuotone as FilterRegularDuotoneIcon, FilterRegularDuotone as SiFilterRegularDuotone };
export default FilterRegularDuotone;
export type { FilterRegularDuotoneProps };
