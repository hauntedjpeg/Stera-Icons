import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FilterRegular } from './FilterRegular.js';
import { FilterRegularDuotone } from './FilterRegularDuotone.js';
import { FilterBold } from './FilterBold.js';
import { FilterBoldDuotone } from './FilterBoldDuotone.js';
import { FilterFill } from './FilterFill.js';
import { FilterFillDuotone } from './FilterFillDuotone.js';

export interface FilterProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Filter - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FilterRegular } from 'stera-icons/icons/FilterRegular';
 */
const Filter = memo(forwardRef<SVGSVGElement, FilterProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FilterBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FilterBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FilterFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FilterFill ref={ref} {...rest} />;
  if (duotone) return <FilterRegularDuotone ref={ref} {...rest} />;
  return <FilterRegular ref={ref} {...rest} />;
}));

Filter.displayName = 'Filter';

// Triple export pattern (lucide-react style)
export { Filter, Filter as FilterIcon, Filter as SiFilter };
export default Filter;
