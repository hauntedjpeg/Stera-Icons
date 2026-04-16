import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterFillProps = Omit<IconBaseProps, 'children'>;

const FilterFill = memo(
  forwardRef<SVGSVGElement, FilterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.75a1.25 1.25 0 1 1 0 2.5h-4a1.25 1.25 0 1 1 0-2.5zM18 10.75a1.25 1.25 0 1 1 0 2.5H6a1.25 1.25 0 1 1 0-2.5zM22 5.75a1.25 1.25 0 1 1 0 2.5H2a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

FilterFill.displayName = 'FilterFill';

// Triple export pattern (lucide-react style)
export { FilterFill, FilterFill as FilterFillIcon, FilterFill as SiFilterFill };
export default FilterFill;
export type { FilterFillProps };
