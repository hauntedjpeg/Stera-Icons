import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilterFillDuotone = memo(
  forwardRef<SVGSVGElement, FilterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 10.75a1.25 1.25 0 1 1 0 2.5H6a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M14 15.75a1.25 1.25 0 1 1 0 2.5h-4a1.25 1.25 0 1 1 0-2.5zM22 5.75a1.25 1.25 0 1 1 0 2.5H2a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

FilterFillDuotone.displayName = 'FilterFillDuotone';

// Triple export pattern (lucide-react style)
export { FilterFillDuotone, FilterFillDuotone as FilterFillDuotoneIcon, FilterFillDuotone as SiFilterFillDuotone };
export default FilterFillDuotone;
export type { FilterFillDuotoneProps };
