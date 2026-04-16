import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterRegularProps = Omit<IconBaseProps, 'children'>;

const FilterRegular = memo(
  forwardRef<SVGSVGElement, FilterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM18 11.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM22 6.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

FilterRegular.displayName = 'FilterRegular';

// Triple export pattern (lucide-react style)
export { FilterRegular, FilterRegular as FilterRegularIcon, FilterRegular as SiFilterRegular };
export default FilterRegular;
export type { FilterRegularProps };
