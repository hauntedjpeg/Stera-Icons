import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterBoldProps = Omit<IconBaseProps, 'children'>;

const FilterBold = memo(
  forwardRef<SVGSVGElement, FilterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM18 11c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zM22 6c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FilterBold.displayName = 'FilterBold';

// Triple export pattern
export { FilterBold, FilterBold as FilterBoldIcon, FilterBold as SiFilterBold };
export default FilterBold;
export type { FilterBoldProps };
