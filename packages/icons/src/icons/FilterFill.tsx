import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterFillProps = Omit<IconBaseProps, 'children'>;

const FilterFill = memo(
  forwardRef<SVGSVGElement, FilterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM18 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM22 5.75c.69 0 1.25.56 1.25 1.25S22.69 8.25 22 8.25H2C1.31 8.25.75 7.69.75 7S1.31 5.75 2 5.75z" />
    </IconBase>
  ))
);

FilterFill.displayName = 'FilterFill';

// Triple export pattern
export { FilterFill, FilterFill as FilterFillIcon, FilterFill as SiFilterFill };
export default FilterFill;
export type { FilterFillProps };
