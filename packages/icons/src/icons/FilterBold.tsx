import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterBoldProps = Omit<IconBaseProps, 'children'>;

const FilterBold = memo(
  forwardRef<SVGSVGElement, FilterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM18 11a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FilterBold.displayName = 'FilterBold';

// Triple export pattern (lucide-react style)
export { FilterBold, FilterBold as FilterBoldIcon, FilterBold as SiFilterBold };
export default FilterBold;
export type { FilterBoldProps };
