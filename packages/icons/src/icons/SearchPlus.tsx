import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SearchPlusRegular } from './SearchPlusRegular.js';
import { SearchPlusRegularDuotone } from './SearchPlusRegularDuotone.js';
import { SearchPlusBold } from './SearchPlusBold.js';
import { SearchPlusBoldDuotone } from './SearchPlusBoldDuotone.js';
import { SearchPlusFill } from './SearchPlusFill.js';
import { SearchPlusFillDuotone } from './SearchPlusFillDuotone.js';

export interface SearchPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SearchPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SearchPlusRegular } from 'stera-icons/icons/SearchPlusRegular';
 */
const SearchPlus = memo(forwardRef<SVGSVGElement, SearchPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SearchPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SearchPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SearchPlusFill ref={ref} {...rest} />;
  if (duotone) return <SearchPlusRegularDuotone ref={ref} {...rest} />;
  return <SearchPlusRegular ref={ref} {...rest} />;
}));

SearchPlus.displayName = 'SearchPlus';

// Triple export pattern (lucide-react style)
export { SearchPlus, SearchPlus as SearchPlusIcon, SearchPlus as SiSearchPlus };
export default SearchPlus;
