import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SearchMinusRegular } from './SearchMinusRegular.js';
import { SearchMinusRegularDuotone } from './SearchMinusRegularDuotone.js';
import { SearchMinusBold } from './SearchMinusBold.js';
import { SearchMinusBoldDuotone } from './SearchMinusBoldDuotone.js';
import { SearchMinusFill } from './SearchMinusFill.js';
import { SearchMinusFillDuotone } from './SearchMinusFillDuotone.js';

export interface SearchMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SearchMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SearchMinusRegular } from 'stera-icons/icons/SearchMinusRegular';
 */
const SearchMinus = memo(forwardRef<SVGSVGElement, SearchMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SearchMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SearchMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SearchMinusFill ref={ref} {...rest} />;
  if (duotone) return <SearchMinusRegularDuotone ref={ref} {...rest} />;
  return <SearchMinusRegular ref={ref} {...rest} />;
}));

SearchMinus.displayName = 'SearchMinus';

// Triple export pattern (lucide-react style)
export { SearchMinus, SearchMinus as SearchMinusIcon, SearchMinus as SiSearchMinus };
export default SearchMinus;
