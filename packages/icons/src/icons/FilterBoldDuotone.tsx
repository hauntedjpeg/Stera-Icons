import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilterBoldDuotone = memo(
  forwardRef<SVGSVGElement, FilterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 11c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M14 16c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM22 6c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FilterBoldDuotone.displayName = 'FilterBoldDuotone';

// Triple export pattern
export { FilterBoldDuotone, FilterBoldDuotone as FilterBoldDuotoneIcon, FilterBoldDuotone as SiFilterBoldDuotone };
export default FilterBoldDuotone;
export type { FilterBoldDuotoneProps };
