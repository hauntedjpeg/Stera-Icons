import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilterBoldDuotone = memo(
  forwardRef<SVGSVGElement, FilterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 11a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z" opacity={.4} />
        <path d="M14 16a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FilterBoldDuotone.displayName = 'FilterBoldDuotone';

// Triple export pattern (lucide-react style)
export { FilterBoldDuotone, FilterBoldDuotone as FilterBoldDuotoneIcon, FilterBoldDuotone as SiFilterBoldDuotone };
export default FilterBoldDuotone;
export type { FilterBoldDuotoneProps };
