import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchMinusFillProps = Omit<IconBaseProps, 'children'>;

const SearchMinusFill = memo(
  forwardRef<SVGSVGElement, SearchMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.63c4.63 0 8.38 3.74 8.38 8.37 0 1.82-.59 3.5-1.57 4.87l3.66 3.66c.54.53.54 1.4 0 1.94-.53.54-1.4.54-1.94 0l-3.66-3.66c-1.37.98-3.05 1.57-4.87 1.57-4.63 0-8.37-3.75-8.37-8.38S6.37 2.63 11 2.63m-3 7.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchMinusFill.displayName = 'SearchMinusFill';

// Triple export pattern
export { SearchMinusFill, SearchMinusFill as SearchMinusFillIcon, SearchMinusFill as SiSearchMinusFill };
export default SearchMinusFill;
export type { SearchMinusFillProps };
